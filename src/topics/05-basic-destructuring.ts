interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author:string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'shape off';
const {song:anotherSong, songDuration:duration, details : {author, year} } = audioPlayer;
/*
const {song:anotherSong, songDuration:duration, details } = audioPlayer;
const {author, year} = details;
*/
console.log({ song, anotherSong, duration, author, year });

const [p1, p2, trunks] : string[] = ['goku', 'vegeta', 'trunks'];

console.log({ p1, p2, trunks });

const [, , trunks2] : string[] = ['goku', 'vegeta', 'trunks'];

console.log({ p1, p2, trunks2 });

export {};