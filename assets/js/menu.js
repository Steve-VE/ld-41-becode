let menuOption = {
    preload : function preload() {
        this.load.spritesheet("menu",
            "assets/pics/start_menu.png",
            { frameWidth: 64, frameHeight: 64 });
        this.load.image("logo", "assets/pics/upperLogo.png");
        this.load.image("background", "assets/pics/white.png");
    },
    create : function create() {
        let backMenu = this.add.image(400,0,"background");
        backMenu.scaleX = 4;
        backMenu.scaleY = 4;
        let logoMenu = this.add.image(200,70,"logo");
        logoMenu.scaleX = 0.3;
        logoMenu.scaleY = 0.3;

    },
    update : function update() {

    }
}
