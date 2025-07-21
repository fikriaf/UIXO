import { client } from "@gradio/client";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { query, language } = req.body;

    const client = await Client.connect("akhaliq/anycoder");
    const result = await client.predict("/generation_code", {
      query,
      image: null,
      file: null,
      website_url: null,
      enable_search: false,
      language
    });

    res.json({ result: result.data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Terjadi kesalahan saat generate." });
  }
});

export default router;
