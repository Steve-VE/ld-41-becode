function changeMusic(musicName, soundSource = "soundManager"){ // Fonction à appeler pour changer de musique
    upperCards.scene.getScene(soundSource).changeMusic( musicName );
}

function screenWidth(p_percent = 1){
    return Math.floor(upperCards.canvas.width * p_percent);
}
function screenHeight(p_percent = 1){
    return Math.floor(upperCards.canvas.height * p_percent);
}

function setupSpritesheet(scene, animationsProperties, animationsPrefixe = [""]){
    // console.log(scene);
    for(let i = 0; i < animationsPrefixe.length; i++){
        let currentPrefixe = animationsPrefixe[i];
        // console.log("-- Character : " + currentPrefixe);

        for(let j = 0; j < animationsProperties.length; j++){
            let currentAnimation = animationsProperties[j];
            // console.log("-- Animations : " + currentAnimation.key);
            let animationName = currentPrefixe + "-" + currentAnimation.key;
            // console.log("\t-- " + animationName);

            let animationData = null;

            if(typeof(currentAnimation.frames) == "object"){

                animationData = scene.anims.create({
                    key: animationName,
                    frames: scene.anims.generateFrameNumbers( currentPrefixe, {
                        start: currentAnimation.frames.start,
                        end: currentAnimation.frames.end
                    }),
                    frameRate: 4,
                    repeat: currentAnimation.repeat
                });
            }
            else{
                animationData = scene.anims.create({
                    key: animationName,
                    frames: [{key: currentPrefixe, frame: currentAnimation.frames}],
                    frameRate: 4
                });
            }
        }
    }
}

function damage ( hits, previousLifepoints = playerCharacter.lifePoints) {
    let lifePoints = (previousLifepoints - hits);
    return lifePoints;

}


function onChrome(){
    return (navigator.userAgent.indexOf("Chrome") != -1);
}