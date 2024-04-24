function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album('Michael Jackson', 'Thriller'));
console.log(make_album('AC/DC', 'Back in Black', 15));
console.log(make_album('Pink Floyd', 'Dark Side of the Moon', 20));
