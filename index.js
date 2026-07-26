import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({"data":"Hello from Node.js App running on AWS EC2 via Docker & GitHub Actions!", "version":"1.1"});
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});