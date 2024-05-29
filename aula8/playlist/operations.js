const db = require('./db');

const addSong = (title, artist) => {
/*     db.run('INSERT INTO songs (title, artist) VALUES (?, ?)', [title, artist], function(err) {
        if (err) {
            return {"status": "error", "message": err.message};
        }
        return 
    }); */
}

const listSongs = (handleSuccess, handleError) => {
    db.all('SELECT * FROM songs', [], (err, rows) => {
        if (err) {
            handleError({"status": "error", "data": err.message});
        } else {
            handleSuccess({"status": "success", "data": rows});
        }
    });
}

const editSong = () => {

}

const deleteSong = (songId, handleSuccess, handleError) => {
    db.all('DELETE FROM songs WHERE id = ?', [songId], (err, rows) => {
        if (err) {
            handleError({"status": "error", "data": err.message});
        } else {
            handleSuccess({"status": "success", "data": rows});
        }
    });
}

module.exports = {
    addSong: addSong,
    listSongs: listSongs,
    deleteSong: deleteSong
};