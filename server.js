require("dotenv").config();
const axios = require("axios");
const express = require("express");
const cors = require("cors");
const { model } = require("mongoose");
const app = express();

const OpenAI = require("openai");

const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: openaiApiKey });

app.use(express.static("public"));
app.use(cors());

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get("/generate-question-openai", async (req, res) => {
  let messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "What is the capital of Latvia?" },
  ];
  console.log(messages);
  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-4-turbo",
  });

  console.log(completion.choices[0]);

  res.json({ question: completion.choices[0].message.content });
});
