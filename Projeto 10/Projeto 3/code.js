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

var paredes = createGroup();

var parede1 = createSprite (200,240,140,20);
parede1.shapeColor=(rgb(0,66,117));
paredes.add(parede1);
var parede2 = createSprite (140,180,20,100);
parede2.shapeColor=(rgb(0,66,117));
paredes.add(parede2);
var parede3 = createSprite (270,120,20,260);
parede3.shapeColor=(rgb(0,66,117));
paredes.add(parede3);
var parede4 = createSprite (130,70,130,20);
parede4.shapeColor=(rgb(0,66,117));
paredes.add(parede4);
var parede5 = createSprite (75,30,20,70);
parede5.shapeColor=(rgb(0,66,117));
paredes.add(parede5);
var parede6 = createSprite (180,140,60,20);
parede6.shapeColor=(rgb(0,66,117));
paredes.add(parede6);
var parede7 = createSprite (60,210,20,120);
parede7.shapeColor=(rgb(0,66,117));
paredes.add(parede7);
var parede8 = createSprite (30,260,60,20);
parede8.shapeColor=(rgb(0,66,117));
paredes.add(parede8);
var parede9 = createSprite (95,95,20,45);
parede9.shapeColor=(rgb(0,66,117));
paredes.add(parede9);
var parede10 = createSprite (80,330,160,20);
parede10.shapeColor=(rgb(0,66,117));
paredes.add(parede10);
var parede11 = createSprite (300, 330, 110, 20);
parede11.shapeColor=(rgb(0,66,117));
paredes.add(parede11);
var parede12 = createSprite (255,280,20,100);
parede12.shapeColor=(rgb(0,66,117));
paredes.add(parede12);
var parede13 = createSprite (120,190,30,20);
parede13.shapeColor=(rgb(0,66,117));
paredes.add(parede13);
var parede14 = createSprite (230,190,70,20);
parede14.shapeColor=(rgb(0,66,117));
paredes.add(parede14);
var parede15 = createSprite (150,305,20,35);
parede15.shapeColor=(rgb(0,66,117));
paredes.add(parede15);
var parede16 = createSprite (360,280,100,20);
parede16.shapeColor=(rgb(0,66,117));
paredes.add(parede16);
var parede17 = createSprite (200,370,20,60);
parede17.shapeColor=(rgb(0,66,117));
paredes.add(parede17);
var parede18 = createSprite (310,190,90,20);
parede18.shapeColor=(rgb(0,66,117));
paredes.add(parede18);
var parede19 = createSprite (345,212,20,30);
parede19.shapeColor=(rgb(0,66,117));
paredes.add(parede19);
var parede20 = createSprite (330,110,20,70);
parede20.shapeColor=(rgb(0,66,117));
paredes.add(parede20);
var parede21 = createSprite (360,85,80,20);
parede21.shapeColor=(rgb(0,66,117));
paredes.add(parede21);
var parede22 = createSprite (345,350,20,40);
parede22.shapeColor=(rgb(0,66,117));
paredes.add(parede22);



var sofia = createSprite (230,215,20,20);
sofia.shapeColor="pink";

var taca = createSprite (350,30,20,20);
taca.shapeColor="yellow";

function draw() {
  background(rgb(178,222,255));
  drawSprites();
  createEdgeSprites();
  sofia.collide(paredes);
  sofia.collide(edges);
  
  textSize(20);
  textFont("comic sans ms");
  text ("sofia",230,195);
  
  textSize(20);
  textFont("comic sans ms");
  text ("taça",340,15);
  
  if(keyDown ("up")){
    sofia.y = sofia.y - 4;
  }
  if(keyDown("down")){
    sofia.y = sofia.y + 4;
  }
  if(keyDown("right")){
    sofia.x = sofia.x + 4;
  }
  if(keyDown("left")){
    sofia.x = sofia.x - 4;
  }
  if (sofia.isTouching(taca)) {
    background("pink");
    textFont("comic sans ms");
    textSize(50);
    text("Você venceu!",60,200);
  }
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
