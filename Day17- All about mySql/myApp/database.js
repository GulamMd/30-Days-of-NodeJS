import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

//Get all notes from database
export async function getNotes() {
    const [rows] = await pool.query("SELECT * FROM notes")
    return rows
}
//Get a particular note from database with id
export async function getNoteById(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM notes
    WHERE id = ?
    `, [id])
    return rows[0]
}
//Creating a note
export async function createNote(title, contents) {
    const [result] = await pool.query(`
    INSERT INTO notes (title, contents)
    VALUES (?, ?)
    `, [title, contents])
    const id = result.insertId
    return getNoteById(id)
}

const notes = await getNotes();
const notesById = await getNoteById(1);
const newNote = await createNote('test2', 'test2')

console.log(newNote);