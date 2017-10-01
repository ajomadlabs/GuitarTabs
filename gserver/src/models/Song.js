// Defining a module for Models
module.exports = (sequelize, dataTypes) => {
  // Defining an Song Model
  const Song = sequelize.define('Song', {
    title: dataTypes.STRING,
    artist: dataTypes.STRING,
    genre: dataTypes.STRING,
    album: dataTypes.STRING,
    albumImageUrl: dataTypes.STRING,
    youtubeId: dataTypes.STRING,
    lyrics: dataTypes.TEXT,
    tab: dataTypes.TEXT 
  })

  return Song
}
