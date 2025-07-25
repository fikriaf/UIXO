export async function startStreaming(
session_hash: string,
onChunk: (chunk: string, language: string) => void
): Promise<void> {
    const url = `https://qwen-qwen3-coder-webdev.hf.space/gradio_api/queue/data?session_hash=${session_hash}`;

    const res = await fetch(url, {
        headers: {
            "Host": "https://qwen-qwen3-coder-webdev.hf.space",
            "User-Agent": "Mozilla/5.0 (Linux; Android 11; Infinix X662 Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.7204.157 Mobile Safari/537.36",
            "Origin": "https://qwen-qwen3-coder-webdev.hf.space",

        },
    });

    if (!res.body) throw new Error("No stream response");

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let buffer = "";
    let inCodeBlock = false;
    let language = "";
    let codeBuffer = "";
    const isBacktickOnly = (str: string) =>
    str.trim() === "```" || str.trimEnd().endsWith("\n```");

    while (true) {
        const { value, done } = await reader.read();
        if (done) return;

        buffer += decoder.decode(value, { stream: true });

        let eventEnd;

        while ((eventEnd = buffer.indexOf("\n\n")) !== -1) {
            
            const event = buffer.slice(0, eventEnd);
            buffer = buffer.slice(eventEnd + 2); // Buang "\n\n"

            const lines = event
                .split("\n")
                .filter((line) => line.startsWith("data: "))
                .map((line) => line.slice(6));

            if (lines.length === 0) continue;

            const jsonString = lines.join("");
            let dataJson: any;
            try {
                dataJson = JSON.parse(jsonString);
            } catch {
                continue;
            }

            const msg = dataJson["msg"] ?? null;

            if (msg === "process_generating") {
                const output_data = dataJson?.output?.data;

                for (const entry of output_data) {
                    if (Array.isArray(entry)) {
                        for (const item of entry) {
                            if (Array.isArray(item) && item.length >= 3) {

                                const [action, , finalValue] = item;
                                if (action === "append" && typeof finalValue === "string") {

                                    if (!inCodeBlock) {
                                        if (finalValue.trim() === "```") {
                                            inCodeBlock = true;
                                            language = "";
                                            codeBuffer = "";
                                        }
                                        continue;
                                    }

                                    if (inCodeBlock && !language) {
                                        const firstWord = finalValue.split(/\s/)[0];
                                        if (/^[a-zA-Z]+$/.test(firstWord)) {
                                            language = firstWord;
                                            const remaining = finalValue.slice(firstWord.length);
                                            if (remaining.trim()) {
                                            codeBuffer += remaining;
                                            onChunk(remaining, language);
                                            }
                                        } else {
                                            codeBuffer += finalValue;
                                            onChunk(finalValue, language);
                                        }
                                        continue;
                                    }

                                    if (finalValue.trim() === "```" || finalValue.includes("```")) {
                                        inCodeBlock = false;
                                        onChunk("", language);
                                        codeBuffer = "";
                                        language = "";
                                        continue;
                                    }

                                    codeBuffer += finalValue;
                                    if (finalValue.trim()) {
                                        onChunk(finalValue, language);
                                    }
                                    console.log(finalValue)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}