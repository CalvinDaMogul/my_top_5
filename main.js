console.log('Hello developer');

const albums = [
{
    title: '4:44',
    artist: 'JayZ',
    releaseDate: '2017',
    Description: '',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/4-44_album_cover.png',
},

{
    title: '2014 Forest Hills Drive',
    artist: 'J.Cole',
    releaseDate: '2014',
    Description: '',
    imageUrl: 'https://target.scene7.com/is/image/Target/GUEST_46b6d886-e529-4476-be83-82171e2bbaba?wid=488&hei=488&fmt=pjpeg'
},

{
    title: 'Black Market',
    artist: 'Rick Ross',
    releaseDate: '2015',
    Description: '',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51ySJ7JLDSL._SY355_.jpg',
},

{
    title: 'The Life of Pablo',
    artist: 'Kanye West',
    releaseDate: '2016',
    Description: '',
    imageUrl: 'https://cdn.vox-cdn.com/thumbor/oHfVEplZ502yIfrNi4hYgFOUSNM=/0x271:1024x954/1200x800/filters:focal(0x271:1024x954)/cdn.vox-cdn.com/uploads/chorus_image/image/48799109/TLOPGenerator.0.0.png'
},

{
    title: 'Nothing Was the Same',
    artist: 'Drake',
    releaseDate: '2013',
    Description: '',
    imageUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2018/09/Drake-Nothing-Was-The-Same-deluxe-album-cover-web-optimised-820.jpg'
}
];



const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    console.log(selectedDiv);
};

const albumBuilder = (arrayToPrint) => {
    let domString = '';
    arrayToPrint.forEach((albums) => {
        domString += `<div class="card">`;
        domString += `<h2 id="font">${albums.title}</h2>`;
        domString += `<img src=${albums.imageUrl}></img>`;
        domString += `<div class="pcard">`;
        domString += `<p id="font">Artist: ${albums.artist}</p>`;
        domString += `<p id="font">Release Date: ${albums.releaseDate}</p>`;
        domString += `<p id="font">${albums.Description}</p>`;
        domString += `</div>`;
        domString += `</div>`;
    });

    printToDom('myAlbums', domString);
};


const init = () => {
    albumBuilder(albums);
};

init();