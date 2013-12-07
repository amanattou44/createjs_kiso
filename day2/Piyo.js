(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Piyo = function() {
  this.initialize();

  // container
  this.container = new lib.piyo();
  this.container.setTransform(0,0,1,1.001);

  this.addChild(this.container);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,4,50,64);


// symbols:
(lib.shade = function() {
  this.initialize();

  // shade
  this.shape = new cjs.Shape();
  this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AiwBGQhIgdgBgpQABgoBIgeQBKgcBmAAQBnAABJAcQBKAeAAAoQAAAphKAdQhJAehngBQhmABhKgeg");
  this.shape.setTransform(0,0,0.8,0.6);

  this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.9,-5.9,40,12);


(lib.wingRight = function() {
  this.initialize();

  // line
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAjADQgGg/g+ADQgMA5AqAoQAvAygJhXg");
  this.shape.setTransform(3.5,5.9);

  // base
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.lf(["#FFFF99","#FFDD00"],[0,1],-2.2,-1,1.3,3.9).s().p("AgDAoQgqgoAMg5QA+gDAGA/QAGA3gSAAQgKAAgQgSg");
  this.shape_1.setTransform(3.5,5.9);

  this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0,7.5,11.8);


(lib.wingLeft = function() {
  this.initialize();

  // line
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgiADQAGg/A+ADQAMA5gqAoQgvAyAJhXg");
  this.shape.setTransform(-3,5.9);

  // base
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.lf(["#FFFF99","#FFDD00"],[0,1],-1.4,-1,1.5,1.2).s().p("AgiADQAGg/A+ADQAMA5gqAoQgQASgKAAQgSAAAGg3g");
  this.shape_1.setTransform(-3,5.9);

  this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.8,0,7.5,11.8);


(lib.mouth = function() {
  this.initialize();

  // mouth
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FF9900").s().p("AhPAcIBPg3IBQA3g");
  this.shape.setTransform(0,-1.4);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FF8800").s().p("AhPgNICfAAQgQAKgRAGQgXAIgYADQgngDgogYg");
  this.shape_1.setTransform(0,2.8);

  this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-4.2,16,8.6);


(lib.eye = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // eye
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AgbAbQgMgLABgQQgBgPAMgMQAMgMAPABQAQgBALAMQAMAMAAAPQAAAQgMALQgLAMgQAAQgPAAgMgMg");

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#000000").s().p("AgbAUQgMgIABgMQgBgLAMgJQAMgIAPAAQAQAAALAIQAMAJAAALQAAAMgMAIQgLAJgQAAQgPAAgMgJg");

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#000000").s().p("AgbAOQgMgGABgIQgBgHAMgGQAMgFAPAAQAQAAALAFQAMAGAAAHQAAAIgMAGQgLAFgQAAQgPAAgMgFg");

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleY:1}}]}).to({state:[{t:this.shape,p:{scaleY:1}}]},94).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape,p:{scaleY:0.25}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.9,8,8);


(lib.body = function() {
  this.initialize();

  // line
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABkDoQgiAOhCgBQhBABghgOQhQghgQgxQgPgwA2isQA2iuBiAAQACAAABAAQACAAADABQBigBA1CuQA2CsgPAxQgPAwhQAhg");
  this.shape.setTransform(0,-24.9,0.907,1.019);

  // shade
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("AhfDZQAGgiASgGQAcgJAvgPQAxgOAPgwQAQgwg2isQgOgtAVgrIAJARQgHAlAQA0QA2CrgRAxQgQAxg1ARQgzAQgYgBQgNgBgDAdIgbgBg");
  this.shape_1.setTransform(5.9,-21.8);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AhNC1QAYACA0gRQAzgRARgwQAQgxg2isQgQgzAIgmQAUAoAQA6QAxCvgOAxQgOAxhJAjQgcAOg8gCIgLABQADgdAOAAg");
  this.shape_2.setTransform(8.5,-20.9);

  // base
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AAEj4QBZgBAxCyQAxCvgOAxQgOAxhJAjQgeAOg8gCQg7ACgegOQhJgjgOgxQgOgxAxivQAxiyBZABQACgBABABQACgBACABg");
  this.shape_3.setTransform(0,-24.9);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.lf(["#FFFF99","#FFDD00"],[0,1],-4.7,-5,10.3,21).s().p("AAAD5Qg7ACgegOQhJgjgOgxQgNgxAwivQAxiyBZABIADAAIAEAAQBZgBAxCyQAwCvgNAxQgOAxhJAjQgbAMg0AAIgLAAg");
  this.shape_4.setTransform(0,-24.9);

  this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-49.9,36,50.1);


(lib.swingRight = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // wing
  this.instance = new lib.wingRight();

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({rotation:-9.8},3).to({rotation:0},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,7.5,11.8);


(lib.swingLeft = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // wing
  this.instance = new lib.wingLeft();

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({rotation:10},3).to({rotation:-2.8},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.8,0,7.5,11.8);


(lib.head = function() {
  this.initialize();

  // line
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACfiMQBCA6AABSQAABThCA6QhCA7hdAAQhcAAhCg7QhCg6AAhTQAAhSBCg6QBCg7BcAAQBdAABCA7g");
  this.shape.setTransform(0,-19.9,1.111,1);

  // eyes
  this.eyeR = new lib.eye();
  this.eyeR.setTransform(10,-22.9);

  this.eyeL = new lib.eye();
  this.eyeL.setTransform(-9.9,-22.9);

  // mouth
  this.mouth = new lib.mouth();
  this.mouth.setTransform(0,-15.7);

  // shade
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("AiGBOQAJgsAvAAQA5AAAvglQAxgoAQgWQALgPAWADQAFABAGADIgFAPQgQgDgMAOQgIAXgdAYQhGA3hTABQgQALgEAMIgagBg");
  this.shape_1.setTransform(10.9,-7.8);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("Ah2BFQAEgMAPgLQBUAABGg4QAdgXAIgYQAMgNAPADQgRAsgtAhQhHA7hnAAIgBAAg");
  this.shape_2.setTransform(11.9,-6.8);

  // base
  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.lf(["#FFFF99","#FFDD00"],[0,1],-9.9,-17.2,10,17.3).s().p("AiwCNQhIg6gBhTQABhRBIg7QBKg7BmABQBngBBJA7QBKA7AABRQAABThKA6QhJA6hnABQhmgBhKg6g");
  this.shape_3.setTransform(0,-19.9);

  this.addChild(this.shape_3,this.shape_2,this.shape_1,this.mouth,this.eyeL,this.eyeR,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-39.9,50,40);


(lib.base = function() {
  this.initialize();

  // head
  this.head = new lib.head();
  this.head.setTransform(0,-17.9);

  // wing
  this.wingR = new lib.swingRight();
  this.wingR.setTransform(12,-23.9,1,1,0,-4.9,-4.7);

  this.wingL = new lib.swingLeft();
  this.wingL.setTransform(-11.9,-23.9,1,1,0,5,4.8);

  // body
  this.body = new lib.body();

  this.addChild(this.body,this.wingL,this.wingR,this.head);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-57.9,50,58.1);


(lib.piyo = function() {
  this.initialize();

  // base
  this.base = new lib.base();
  this.base.setTransform(0,0,1,0.999);

  // shade
  this.shade = new lib.shade();

  this.addChild(this.shade,this.base);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-57.9,50,64);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
