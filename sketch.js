//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()  
{
	//load images here
  
  happyDog=loadImage("images/dogImg.png")
    dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  
  dog = createSprite(200, 200, 50, 20);
  dog.addImage(happyDog);
  dog.scale=0.3;
  
  //foodStock = database.ref('food')
 // foodStock.on("value",readStock)
}


function draw() {  
  background( 46, 139, 87)

     textSize=2
    fill("pink")
    stroke(2)
    text("Please press up arrow key to feed the Dog!",50,50)

  if(keyWentDown( UP_ARROW ))
  {
    dog.addImage(dogHappy)
  }


  drawSprites();
  //add styles here

}

   function readStock(data){
     foods=data.val();
   }

   function writeStock(x){
      if(x<=0)
      {x=0}
      else
      {x=x-1}
      
       database.ref('/').update
        ({
        food:x
        })
    }
