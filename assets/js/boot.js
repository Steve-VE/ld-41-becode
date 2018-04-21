let bootState = {
    preload : function preload () {
        this.load.image("logo","assets/pics/upperLogo.jpg");
        this.load.image("backgroundBoot", "assets/pics/white.png");
    },
    create : function create () {
        let backgroundBoot = this.add.image(0,0,'backgroundBoot');
        let logoDisplay = this.add.image(400, 200, 'logo');
        backgroundBoot.scaleX = 8;
        backgroundBoot.scaleY = 6;
        logoDisplay.scaleX = 0.5;
        logoDisplay.scaleY = 0.5;
    },
    update : function update () {

    }
}
