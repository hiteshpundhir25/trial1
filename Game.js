class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                
                form = new Form()
                form.display();
            }

        }
    
    play(){
        
                form.hide();
                 drawSprites();
    }
                 
                  
                      
                            
                        
       
 
    end(){
        game.update(2); 
       clear();
       background("black");
       fill("yellow");
       textSize(72);
       stroke("red");
       textFont("Garamond")
       text("YOU WIN !!",350,300)
     }
    }