import Database from "better-sqlite3";
const db = new Database("database.db");

db.prepare(
  `
UPDATE messages SET name = 'Spongebob' WHERE name = 'Bob'
`
).run();

const spongebobMsg = db
  .prepare("SELECT * FROM messages WHERE name='Spongebob'")
  .all();
console.log("Spongebob", spongebobMsg);
