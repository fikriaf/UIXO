import express from "express";
import { Client } from "@gradio/client";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { query, language } = req.body;

    const client = await Client.connect("akhaliq/anycoder");

    const result = await client.predict("/generation_code", {
      query,
      image: undefined, // kalau tidak dipakai
      file: undefined,
      website_url: "", // wajib string walau kosong
      enable_search: false,
      language
    });

    res.json({ result: result.data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Terjadi kesalahan saat generate." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
