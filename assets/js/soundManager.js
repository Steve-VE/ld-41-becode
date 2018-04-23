let currentMusic;
let musicVolume = 0.3;

let soundManager = {
    switchTo: null,
    currentMusicName: null,

    preload: function preload () {
        // Load AUDIO
        this.load.audio('boot', 'assets/audio/boot.wav');
        this.load.audio('menuTheme', 'assets/audio/menuTheme.wav');
        this.fadeVolume = onChrome();
    },

    create: function create () {
        currentMusic = this.sound.add("boot");
        this.currentMusicName = "boot";
        this.switchTo = "boot";
        currentMusic.play({loop: true});
        currentMusic.volume = musicVolume;

        this.changeMusic = function(name){
            this.switchTo = name;
        };
    },

    update: function update () {
        if(this.switchTo != this.currentMusicName){
            if(this.fadeVolume && currentMusic.volume > 0.01){
                currentMusic.volume -= 0.01;
            }
            else{
                currentMusic.destroy();
                currentMusic = this.sound.add(this.switchTo);
                currentMusic.play({loop: true});

                if(this.fadeVolume){
                    currentMusic.volume = 0;
                }

                this.currentMusicName = this.switchTo;
            }
        }
        else if(this.fadeVolume){
            if(currentMusic.volume < musicVolume){
                currentMusic.volume += 0.01;
            }
        }
    }
};
