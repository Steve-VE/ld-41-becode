let goToCharacterSelection = false;
let menuOption = {
    preload : function preload() {
    },

    create : function create() {
        let backMenu = this.add.image(400,0,"white_background");
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
        menu1.anims.play('menu1');
        menu1.scaleX = 0.2;
        menu1.scaleY = 0.2;
        let menu2 = this.add.sprite(screenWidth(0.5), screenHeight(0.65), 'menu').setInteractive();
        menu2.anims.play('menu2');
        menu2.scaleX = 0.2;
        menu2.scaleY = 0.2;
        let menu3 = this.add.sprite(screenWidth(0.5), screenHeight(0.9), 'menu').setInteractive();
        menu3.anims.play('menu3');
        menu3.scaleX = 0.2;
        menu3.scaleY = 0.2;

        menu3.on('pointerdown', function(){
            console.log("hello");}
        );

        menu1.on('pointerdown', function (currScene = this) {
            // upperCards.scene.launch("uppergame");
            upperCards.scene.sleep("menu");
            upperCards.scene.start("characSelection");
            // soundManager.changeMusic("menuTheme");
            console.log(upperCards);
            changeMusic("menuTheme");
        });
    },

    update : function update() {
    }
};