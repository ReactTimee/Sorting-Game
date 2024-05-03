require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const OpenAI = require("openai");

const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: openaiApiKey });
app.use(express.json());
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

app.post('/send-name', (req, res) => {
  const userName = req.body.name; 
  console.log("Received name from client:", userName);
  res.json({message: "Username received successfully!"});
});

app.post('/send-score', (req, res) => {
  const { score } = req.body;
  if (score === undefined) {
      return res.status(400).send("Score is required");
  }
  console.log("Received score:", score);
  res.json({ message: "Score received successfully!" });
});


app.post('/send-to-server', (req, res) => {
  const { username, score } = req.body;

  if (!username || typeof score !== 'number') {
      return res.status(400).json({ message: 'Username and score are required and must be valid.' });
  }
  console.log("Received data:", { username, score });
  leaderboard.push({ username, score });

  leaderboard.sort((a, b) => b.score - a.score);

  leaderboard = leaderboard.slice(0, 10);

  res.json({ leaderboard });
});
