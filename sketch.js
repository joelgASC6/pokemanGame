var Red = 'red'
var Blue = 'blue'
var Blue2 = 'blue'
var Yellow = 'yellow'
var PikachuX = 100
var PikachuY = 480
var SquirtleX = 500
var SquirtleY = 250
var BaseText = "What will Pikachu do?"
var Attack = "Attack"
var Heal = "Heal"
var pikachuHP = "400"
var squirtleHP = "500"
var max = 41
var min = 20
var quickAttack = Math.floor(Math.random() * (+max - +min)) + +min;
var lightBolt =  Math.floor(Math.random() * ((+max+15) - +min)) + +min;
var bubble = Math.floor(Math.random() * (+max - +min)) + +min;
var tackle = Math.floor(Math.random() * (+max-2) - +min) + +min;
var rainSplash = Math.floor(Math.random() * ((+max+20) - +min)) + +min;
var Squirtle = "Squirtle"
var Pikachu = "Pikachu"





function setup(){
    createCanvas(600, 600)
    background('rgba(0,255,0, 0.25)');
}

function draw(){{
    fill('white')
    rect(10, 10, 580, 100, 20)
    rect(20, 150, 300, 100, 20)
    rect(275, 450, 300, 100, 20)
    rect(20, 20, 330, 82, 20 )
    rect(380, 20, 200, 82, 20 )
    fill(Blue)
    rect(390, 30, 80, 60, 20)
    fill(Blue2)
    rect(490, 30, 80, 60, 20)
    fill('yellow')
    ellipse(PikachuX, PikachuY , 150, 200)
    fill('blue')
    ellipse(SquirtleX, SquirtleY, 120, 200 )
    fill('red')
    rect(30, 175, 150, 10, 20)
    rect(285, 475, 160, 10, 20)
}
    if(mouseX >= 390 && mouseX <= 470 && mouseY >= 30 && mouseY <= 90 && Blue == 'blue'){
        rect(40, 30, 112, 50)
        rect(168, 30, 122, 50)
    }

    theWords();
    fill(Yellow)
   ellipse(100, 480, 150, 200)
   ellipse(100, 380, 100, 90)
   fill('#fae')
   ellipse(70, 390, 18, 20)
   ellipse(130, 390, 18, 20)
   fill("black")
   ellipse(88, 362, 15, 25)
   ellipse(117, 362, 15, 25)
   fill("white")
   circle(88, 358, 8)
   circle(117, 358, 8)
   fill("red")
   ellipse(102, 400, 18, 25)
strokeWeight(3);
   point(82, 339);
   point(65, 347);
   point(70, 300);
   point(52, 315);
   point(52, 280); //tip of the ear
   point(120, 339);//start of ear 2
   point(136, 347);
   point(130, 300);
   point(148, 315);
strokeWeight(1);
   fill("black"); //ear1
   beginShape();
   curveVertex(52, 315);
   curveVertex(52, 315);
   curveVertex(52, 280);
   curveVertex(70, 300);
   curveVertex(70, 300);
   endShape();
   fill(Yellow)
   beginShape();
   curveVertex(65, 347);
   curveVertex(65, 347);
   curveVertex(52, 315);
   curveVertex(70, 300);
   curveVertex(82, 339);
   curveVertex(82, 339);
   endShape();
   fill("black"); //ear2
   beginShape();
   curveVertex(130, 300);
   curveVertex(130, 300);
   curveVertex(148, 280);
   curveVertex(148, 315);
   curveVertex(148, 315);
   endShape();
   fill(Yellow);
   beginShape();
   curveVertex(120, 339);
   curveVertex(120, 339);
   curveVertex(130, 300);
   curveVertex(148, 315);
   curveVertex(136, 347);
   curveVertex(136, 347);
   endShape();
   fill(Yellow);//feet
   ellipse(125, 575, 20, 24);
   ellipse(80, 575, 20, 24);

}

function theWords(){
    fill(32)
    textSize(20)
    text(BaseText, 40, 40, 275, 320)
    text(Attack, 400, 70)
    text(Heal, 510, 70 )
    text(Squirtle, 30, 167)
    text(Pikachu, 285, 467) 
}

function mouseClicked(){
    if(mouseX >= 390 && mouseX <= 470 && mouseY >= 30 && mouseY <= 90 && Blue == 'blue') {
        Blue = 'red'
        BaseText = "Quick Attack    " + "Lighting Bolt" ;
        Attack = "Back";
        Heal = "";}
            
        else if(mouseX >= 390 && mouseX <= 470 && mouseY >= 30 && mouseY <= 90 && Blue == 'red' ) {
            Blue = 'blue'
            BaseText = "What will Pikachu do?" ;
            Attack = "Attack";
            Heal = "Heal";}{
    

                if(mouseX >= 390 && mouseX <= 470 && mouseY >= 30 && mouseY <= 90 && Blue == 'blue'){
                    rect(40, 30, 112, 50)
                    rect(168, 30, 122, 50)
                }     
    }
    
}