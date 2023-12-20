import Database from "better-sqlite3";
const db = new Database("database.db");

const messages = db.prepare("SELECT * FROM messages").all();
console.log("messages", messages);

const spongebobMsg = db
  .prepare("SELECT content FROM messages WHERE name='Spongebob'")
  .all();
console.log("Spongebob", spongebobMsg);

const jamMsg = db
  .prepare("SELECT * FROM messages WHERE content LIKE'%jam%'")
  .all();
console.log("jam messages", jamMsg);
