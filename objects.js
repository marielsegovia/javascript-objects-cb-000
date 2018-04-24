//Assign an object to the variable playlist and initialize the object with a key-value pair —
//the keys will be artist names and the values will be song titles.
//(What limitation does this impose on our playlist?)

var playlist = new Object({artistName: 'songTitle'})


//function update playlist, three parameters, playlist-object, artist name- string, songtitle 
//body of the function should add the song and artist as a key-value pair to the playlist object
//The function should return the whole playlist.

function updatePlaylist(playlist, artistName, songTitle) {
  
  return Object.assign({}, playlist, { [artistName]: songTitle})//whole playlist 
}