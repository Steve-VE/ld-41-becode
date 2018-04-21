let bootState = {
    preload : function preload () {
        this.load.image("logo","assets/pics/upperLogo.jpg");
    },
    create : function create () {
        let logoDisplay = this.add.image(400, 300, 'logo');
    },
    update : function update () {

    }
}
