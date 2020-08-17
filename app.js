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

    let songList = [];
    const songListDisplay = document.getElementById('firstTenSong');
    for (let i = 0; i < songData.length; i++) {
        const item = songData[i];

        const songTitle = item.title;
        const artistName = item.artist.name;
        const songDetails = `Title: ${songTitle} Artist: ${artistName}`
        songList.push(songDetails);
        if (songList.length <= 10) {
            const li = document.createElement('li');
            li.innerText = songDetails;
            songListDisplay.appendChild(li);
        };
    
    };
    document.getElementById('searchInput').addEventListener('click', function(){
        songListDisplay.innerText = "";
    })
};





      