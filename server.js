require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();

const openaiApiKey = process.env.OPENAI_API_KEY;

app.use(express.static('public'));

app.get('/generate-question', async (req, res) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://api.openai.com/v1/completions',
            headers: {
                'Authorization': `Bearer ${openaiApiKey}`,
                'Content-Type': 'application/json'
            },
            data: {
                model: "text-davinci-003",
                prompt: "Create a detailed question about Latvian history.",
                max_tokens: 150,
            }
        });

        res.json({ question: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error('Error calling OpenAI:', error);
        res.status(500).send('Failed to generate question');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
