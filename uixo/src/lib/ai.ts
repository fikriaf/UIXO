import { Client } from "@gradio/client";

export async function runGradio() {
  const client = await Client.connect("akhaliq/anycoder");

  const result = await client.predict("/generation_code", {
    query: "Hello!!",
    image: null,
    file: null,
    website_url: "",
    enable_search: false,
    language: "html"
  });

  console.log(result.data);
}

runGradio().catch(console.error);
