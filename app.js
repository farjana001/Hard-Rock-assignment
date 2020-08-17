// //  https://api.lyrics.ovh/




document.getElementById('searchBtn').addEventListener('click', function(){
    var searchInputValue = document.getElementById('searchInput').value;
    fetch(`https://api.lyrics.ovh/suggest/` + searchInputValue)
    .then(res => res.json())
    .then(data => displaySongDetails(data));
    
    document.getElementById('searchInput').value = "";
});

function displaySongDetails(allData){
    let songData = allData.data;
    console.log(songData);
    let songList = [];
    const songListDisplay = document.getElementById('firstTenSong');
    const singleResult = document.getElementById('singleResult');
    for (let i = 0; i < songData.length; i++) {
        const item = songData[i];

        const songTitle = item.title;
        const albumTitle = item.album.title;
        const artistName = item.artist.name;
        const songDetails = [];
        songList.push(songDetails);
        if (songList.length <= 10) {
            singleResult.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                       <div class="col-md-9">
                                       <h3 class="lyrics-name">${songTitle}</h3>
                                       <p class="author lead">Album: <span>${albumTitle}</span></p>
                                       <p class="mt-n3">Artist: <span>${artistName}</span></p>
                                       </div>
                                       <div class="col-md-3 text-md-right text-center">
                                       <button class="btn btn-success">Get Lyrics</button>
                                       </div>
                                       </div>`
        };
    };
    document.getElementById('searchInput').addEventListener('click', function(){
        singleResult.innerHTML = "";
    })
};

// function getLyrics(){
//     console.log("Search lyrics for", song);
// }




      