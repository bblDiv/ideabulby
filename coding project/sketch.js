var gameOn = false
var playerX = 970
var playerY = 600
var tooMuchLeft = false
var tooMuchRight = true
var youShootFromHere = playerY - 55
var stopTheGoddamnBlast = false
var youDead = false
var theGuysWhoWantYouDead = 20
var howManyGuysWhoWantYouDeadYouKilledBeforeYouDied = 0
var youRageQuitted = false


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	
	background(100)
	textFont('Comic Sans MS')
	textSize = (60)

    if (gameOn == false) {
        text('Click enter to start', 800, 400)
        }
        if (keyIsPressed && keyCode == 13) {
        gameOn = true
        }
        //if (gameOn = true) {
        
        if (gameOn == true) {
            
        rect(playerX, playerY, 50, 50)
        
        }
            if (tooMuchLeft == false) {
            
            playerX += 3
        
                     
        
            }			 
        if (playerX	<= 10){
            tooMuchRight = false
            tooMuchLeft = false
        }
        
        if (tooMuchRight == false){
            playerX+=3
        }
            
        if (playerX >= 1850) {
        tooMuchLeft = true
        tooMuchRight = true
        }
        if (tooMuchLeft == true) {
            playerX -=3
        }
            //}
        // if (keyIsPressed && key == 'w') {
        // rect(center, shootY, 9, 27)
        
        
        //}
        
        
        
            
            if (key == 'w') {
                rect(waitNoItWorks,youShootFromHere,9,27)
                youShootFromHere -= 3	
        
        }
        
        if (youShootFromHere <= 0) {
            stopTheGoddamnBlast = true
        }
            
        if (stopTheGoddamnBlast == true) {
            youShootFromHere = playerY - 55
            
        }
            
            
            
        // while (theGuysWhoWantYouDead != 0) {
        // 	if (key == 'w') {
        // 		rect(playerX+20,youShootFromHere,9,27)
        // 		youShootFromHere -= 3	
        
        // }
        
        //}
                
                
                
                
                
        
            
        }
        