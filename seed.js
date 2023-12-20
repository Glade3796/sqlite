import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    name TEXT,
    content TEXT
  )
`);

db.prepare(
  `
INSERT INTO messages (name, content) VALUES (?, ?)`
).run("spongebob", "hello world");

const insertStatement = db.prepare(
  `
  INSERT INTO messages (name, content) VALUES (?, ?)`
);
insertStatement.run("Spongebob", "Hello world");
insertStatement.run("Patrick", "Hi Spongebob");
insertStatement.run("Squidward", "I hate you both");
insertStatement.run("Sandy", "Howdy!");
insertStatement.run("Patrick", "Hi Spongebob");
insertStatement.run("Spongebob", "LOL");
insertStatement.run("Adam", "I like jam");
insertStatement.run("Bob", "Are you for real?");
