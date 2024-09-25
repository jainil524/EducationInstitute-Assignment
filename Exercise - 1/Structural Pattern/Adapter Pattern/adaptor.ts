// MediaPlayer Interface
interface MediaPlayer {
    play(fileName: string): void;
}

// MP3 Player Class
class MP3Player implements MediaPlayer {
    play(fileName: string): void {
        console.log(`Playing MP3 file: ${fileName}`);
    }
}

// Media Adapter Class
class MediaAdapter implements MediaPlayer {
    private mediaPlayer: MediaPlayer;

    constructor(format: string) {
        if (format === "mp4") {
            this.mediaPlayer = new MP4Player();
        } else if (format === "avi") {
            this.mediaPlayer = new AVIPlayer();
        } else {
            throw new Error("Unsupported format");
        }
    }

    play(fileName: string): void {
        // Adapting the format to MP3
        console.log(`Converting ${fileName} to MP3...`);
        this.mediaPlayer.play(fileName);
    }
}

// MP4 Player Class
class MP4Player implements MediaPlayer {
    play(fileName: string): void {
        console.log(`Playing MP4 file: ${fileName}`);
    }
}

// AVI Player Class
class AVIPlayer implements MediaPlayer {
    play(fileName: string): void {
        console.log(`Playing AVI file: ${fileName}`);
    }
}

// Client Code
const mp3Player = new MP3Player();
mp3Player.play("song.mp3");

const mp4Adapter = new MediaAdapter("mp4");
mp4Adapter.play("video.mp4");

const aviAdapter = new MediaAdapter("avi");
aviAdapter.play("movie.avi");
