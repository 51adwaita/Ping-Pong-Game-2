var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball = createSprite(175,28,20,20);
var paddle = createSprite(183,279,50,20);

var boundary1 = createSprite(184,369,420,10);




ball.shapeColor = "orange";
paddle.shapeColor = "yellow";







var gameState = "serve";
var playerScore=0;


function draw() {
 background("blue");
  



  
  
  
  textSize(30);
 fill("yellow");
text(playerScore,362,28);


 if (gameState == "serve") 
 {
   
   
   textSize(25);
   fill("yellow");
   text("Welcome! Press space to serve", 40, 96);
   textSize(25);
   fill("yellow");
   text("Move paddle with the arrow keys",17,184);
 
   
 }
   

   
 
   
   
   if (keyDown("space")) {
   ball.velocityY = 6;
   ball.velocityX = -6;
     playSound("assets/category_background/jazzy_beats.mp3", false);
     gameState = "play";
   
   }     

 
if (gameState == "play") 
{
      if (ball.isTouching(paddle)) 
{
   playerScore = playerScore + 1;
 }
      if (playerScore == 10) 
{
   textSize(50);
   fill("red");
  text("You Win",140,107);
 ball.velocityY = 0;
  ball.velocityX = 0;
   ball.x = 175;
   ball.y = 28;
   stopSound("assets/category_background/jazzy_beats.mp3");
   playSound("assets/category_bell/bells_win.mp3");


}
     
      if (keyDown("left")) 
  {
    paddle.x = paddle.x - 12;
  }
  if (keyDown("right")) 
  {
    paddle.x = paddle.x + 12;
  
    
  }
  
  if (ball.isTouching(boundary1)) 
{
   textSize(50);
  fill("red");
  text("You Loose !",100,50);
 ball.velocityY = 0;
 ball.velocityX = 0;
   stopSound("assets/category_background/jazzy_beats.mp3");

}
  
}


 




  
 

 
 createEdgeSprites();
ball.bounceOff(rightEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(topEdge);
ball.bounceOff(paddle);


 
 
 
   
drawSprites();
}
















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
