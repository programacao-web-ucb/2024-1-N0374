const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('db.sqlite');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    artist TEXT NOT NULL
  )`);
});

// Função para inserir músicas iniciais
function initializeDatabase() {
  const songs = [
    { artist: 'Kendrick Lamar', title: 'Momma' },
    { artist: 'Frank Ocean', title: 'Godspeed' },
    { artist: 'Radiohead', title: 'Bloom' },
    { artist: 'Eddie Vedder', title: 'Hard Sun' },
    { artist: 'Max Richter', title: 'On the Nature of Daylight' },
    { artist: 'Thrice', title: 'Anthology' },
    { artist: 'Pearl Jam', title: 'Waiting For Stevie' },
    { artist: 'Bob Dylan', title: 'The Times They Are A-Changin\'' },
    { artist: 'Jeff Buckley', title: 'Lover, You Should’ve Come Over' },
    { artist: 'Joni Mitchell', title: 'The Last Time I Saw Richard' }
  ];

  db.serialize(() => {
    const stmt = db.prepare(
      'INSERT INTO songs (title, artist) VALUES (?, ?)');
    songs.forEach(song => {
      stmt.run(song.title, song.artist);
    });
    stmt.finalize();
  });
}

//initializeDatabase(); // Chama a função para inicializar o banco de dados

module.exports = db;
