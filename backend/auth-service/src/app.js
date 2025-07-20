import express from 'express';  
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/ranuga', (req, res) => {
    res.send('Hello ranuga!');
});

export default app; 


