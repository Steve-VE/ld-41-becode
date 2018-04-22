let currentMusic;
let musicVolume = 0.3;

let soundManager = {
    switchTo: null,
    currentMusicName: null,

    preload: function preload () {
        // Load AUDIO
        this.load.audio('boot', 'assets/audio/boot.wav');
        this.load.audio('menuTheme', 'assets/audio/menuTheme.wav');
    },

    create: function create () {
        currentMusic = this.sound.add("boot");
        this.currentMusicName = "boot";
        this.switchTo = "boot";
        currentMusic.play({loop: true});
        currentMusic.volume = musicVolume;
    },

    update: function update () {
        if(this.switchTo != this.currentMusicName){
            if(currentMusic.volume > 0.01){
                currentMusic.volume -= 0.01;
            }
            else{
                currentMusic.destroy();
                currentMusic = this.sound.add(this.switchTo);
                currentMusic.play({loop: true});
                currentMusic.volume = 0;
                this.currentMusicName = this.switchTo;
            }
        }
        else{
            if(currentMusic.volume < musicVolume){
                currentMusic.volume += 0.01;
            }
        }
    },

    changeMusic: function changeMusic(name){
        this.switchTo = name;
            // currentMusic.destroy();
            // currentMusic = this.sound.add(name);
            // currentMusic.play({loop: true});
            // currentMusic.volume = musicVolume;
    }
};