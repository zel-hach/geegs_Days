const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let score = 0;
let leaderboard = [];

app.post('/guess', (req, res) => {
    const { answer ,correctEmojie} = req.body;
    if (answer === correctEmojie) {
        score++;
        leaderboard.push({name:correctEmojie,score});
        leaderboard.sort((a, b) => b.score - a.score);
        leaderboard = leaderboard.slice(0, 5);
        res.json({ correct:true,message: "Correct!" ,score: score});
    } else {
        res.json({ correct:false,message: ` Wrong! Correct answer was ${correctEmojie}` });
    }
});
app.get('/leaderboard', (req, res) => {
    res.json(leaderboard);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});