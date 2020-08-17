// //  https://api.lyrics.ovh/v1




document.getElementById('searchBtn').addEventListener('click', function(){
    var searchInputValue = document.getElementById('searchInput').value;
    fetch(`https://api.lyrics.ovh/suggest/` + searchInputValue)
    .then(res => res.json())
    .then(data => displaySongDetails(data));
    
    document.getElementById('searchInput').value = "";
});

function displaySongDetails(allData){
    let songData = allData.data;
    // console.log(songData);
    // console.log(songList);
    // let songListArray = [];
    // console.log(songListArray);
    const songListDiv = document.getElementById('firstTenSong');
    for (let i = 0; i < songData.length; i++) {
        const item = songData[i];
        const songTitle = item.title;
        const artistName = item.artist.name;
        const songDetails = `${songTitle} powered by ${artistName}`
        // console.log(songDetails);
        // songListArray.push(songDetails);
        // let displaySongList = songListArray.slice(0, 10);
        // document.getElementById('firstTenSong').innerText = displaySongList;
        // const songListDiv = document.getElementById('firstTenSong');
        const li = document.createElement('li');
        li.innerText = songDetails;
        songListDiv.appendChild(li);
    }
}



      