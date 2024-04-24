require("dotenv").config();
const express = require("express");
const cors = require("cors");
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
    { role: "system", content: "You are a helpful assistant who generates multiple-choice questions about Latvian history in Latvian." },
    { role: "user", content: "Izveido daudzizvēļu jautājumu par latviešu vēsturi. Atzīmē pareizā atbilde beidzas ar* Izmanto šādu formātu Jautājums: A) B) C) D). Mēģini neakārtot tēmu" },
  ];
  
  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-4-turbo",
  });

  const content = completion.choices[0].message.content;
  const parts = content.split('\n'); 
  const question = parts[0];
  const choices = parts.slice(1);
  res.json({ question: question, choices: choices });
});


app.get("/generate-sports-question", async (req, res) => {
  let messages = [
    { role: "system", content: "You are a helpful assistant who generates multiple-choice questions about Latvian sports in Latvian." },
    { role: "user", content: "Izveido daudzizvēļu jautājumu par latviešu sportu. Atzīmē pareizā atbilde beidzas ar* Izmanto šādu formātu Jautājums: A) B) C) D).Mēģini neakārtot tēmu" },
  ];

  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-4-turbo",
  });

  const content = completion.choices[0].message.content;
  const parts = content.split('\n');
  
  const question = parts[0];
  const choices = parts.slice(1);

  res.json({ question: question, choices: choices });
});


app.get("/generate-cities-question", async (req, res) => {
  let messages = [
    { role: "system", content: "You are a helpful assistant who generates multiple-choice questions about Latvian cities in Latvian." },
    { role: "user", content: "Izveido daudzizvēļu jautājumu par latviešu pilsētām. Atzīmē pareizā atbilde beidzas ar* Izmanto šādu formātu Jautājums: A) B) C) D).Mēģini neakārtot tēmu" },
  ];

  const completion = await openai.chat.completions.create({
    messages: messages,
    model: "gpt-4-turbo",
  });

  const content = completion.choices[0].message.content;
  const parts = content.split('\n');
  
  const question = parts[0];
  const choices = parts.slice(1);

  res.json({ question: question, choices: choices });
});

