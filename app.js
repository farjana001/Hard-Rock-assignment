
// Fetching API url
document.getElementById('searchBtn').addEventListener('click', () => {
    var searchInputValue = document.getElementById('searchInput').value;
    fetch(`https://api.lyrics.ovh/suggest/` + searchInputValue)
    .then(res => res.json())
    .then(data => displaySongDetails(data));
    
    document.getElementById('searchInput').value = "";
});


// Getting display song list details 
displaySongDetails = (allData) => {
    let songData = allData.data;
 
// getting each item of song list
    let songList = [];
    for (let i = 0; i < songData.length; i++) {
        const item = songData[i];

        const songTitle = item.title;
        const albumTitle = item.album.title;
        const artistName = item.artist.name;
        const artistImg = item.artist.picture_small;
        const songDetails = [];
        songList.push(songDetails);

// showing 10items on the list
let searchResult = document.getElementById('searchResult');
        if (songList.length <= 10) {
            
            searchResult.innerHTML += `<div class="single-result row align-items-center my-2 p-3">
                                       <img src="${artistImg}" class="img-fluid artist-image">
                                       <div class="col-md-8">
                                       <h3 class="lyrics-name">${songTitle}</h3>
                                       <p class="author lead">Album: <span>${albumTitle}</span></p>
                                       <p class="author lead mt-n3">Artist: <span>${artistName}</span></p>
                                       </div>
                                       <div class="col-md-3 text-md-right text-center">
                                       <a href="#" onclick="getLyrics('${songTitle}', '${artistName}')" class="btn btn-success">Get Lyrics</a>
                                       </div>
                                       </div>`
        };
    };

// Making the display list empty after clicking the input field
    document.getElementById('searchInput').addEventListener('click', () => {
        document.getElementById('singleLyricsElement').innerText = "";
    })
};


// Fetching the lyrics of songs
getLyrics = (songTitle, artistName) => {
    fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
        .then(res => res.json())
        .then(data => displayLyrics(data, songTitle, artistName))

        document.getElementById('searchResult').style.display = "none";
       

}

// Showing the lyrics on the website
 displayLyrics = (data, songTitle, artistName) => {
    document.getElementById('lyric-title').innerText = songTitle;
    document.getElementById('artist-name').innerText = '- ' + artistName;
    if(data.lyrics){
        document.getElementById('song-lyric').innerText = data.lyrics;
    }
    else{
        document.getElementById('song-lyric').innerText = "Sorry! Your searched lyrics is not found";
    }

};



    //   *******----------*******---------*******---------******* //