import express from 'express'
import { getNotes, getNoteById, createNote } from './database';
const app = express()

app.get('/notes', async (req, res) => {
    const notes = await getNotes()
    res.send(notes);
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

let host = '8081'
app.listen(host, () => {
    console.log(`Server is running at http://localhost:${host}`)
})
