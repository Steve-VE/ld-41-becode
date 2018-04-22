let menuOption = {
    preload : function preload() {
        this.load.spritesheet("menu",
            "assets/pics/start_menu.png",
            { frameWidth: 648, frameHeight: 250 });
        this.load.image("logo", "assets/pics/upperLogo.png");
        this.load.image("background", "assets/pics/white.png");
        this.load.audio("menuTheme", "assets/audio/menuTheme.wav");
    },
    create : function create() {
        let backMenu = this.add.image(400,0,"background");
        backMenu.scaleX = 4;
        backMenu.scaleY = 4;
        let logoMenu = this.add.image(200,70,"logo");
        logoMenu.scaleX = 0.3;
        logoMenu.scaleY = 0.3;
        this.anims.create({
            key: "menu1",
            frames: [{key: 'menu', frame: 0 }]
        });
        this.anims.create({
            key: "menu2",
            frames: [{key: 'menu', frame: 1 }]
        });
        this.anims.create({
            key: "menu3",
            frames: [{key: 'menu', frame: 2 }]
        });
        let menu1 = this.add.sprite(screenWidth(0.5), screenHeight(0.4), 'menu').setInteractive();
        let menu1Size = menu1.anims.play('menu1');
        menu1Size.scaleX = 0.2;
        menu1Size.scaleY = 0.2;
        let menu2 = this.add.sprite(screenWidth(0.5), screenHeight(0.65), 'menu').setInteractive();
        let menu2Size = menu2.anims.play('menu2');
        menu2Size.scaleX = 0.2;
        menu2Size.scaleY = 0.2;
        let menu3 = this.add.sprite(screenWidth(0.5), screenHeight(0.9), 'menu').setInteractive();
        let menu3Size = menu3.anims.play('menu3');
        menu3Size.scaleX = 0.2;
        menu3Size.scaleY = 0.2;
        menu3.on('pointerdown', function(){console.log("hello");});
        menu1.on('pointerdown', function () {
            menuTheme.destroy();
            upperCards.scene.start("uppergame");
        });
        timedEvent = this.time.addEvent({delay: 7000, callback: musicDelay, callbackScope: this});
        function musicDelay () {
            menuTheme = this.sound.add("menuTheme");
            menuTheme.play({loop: true});
            menuTheme.volume = 0.03;
        }


    },
    update : function update() {

    }
}
