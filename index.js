var numberOfButtons = document.querySelectorAll(".drum").length;
for ( var i=0; i<numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            var buttonInnerHTML = this.innerHTML;
            switch (buttonInnerHTML) {
                case "l":
                   var tom1= new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                    
                        case "k":
                   var tom2= new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                    case "s":
                   var tom3= new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                    case "j":
                   var tom4= new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                    case "d":
                  var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                    case "a":
                   var kickbass= new Audio("sounds/kick-bass.mp3");
                    kickbass.play();
                    break;
                    case "w":
                   var crash= new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                default:console.log(invalid button)
                    
            }
             
            
        });   
}
document.addEventListener("keypress",function(event){
    makeSound(event.key)
})
function makeSound(key) {

            switch (key) {
                case "l":
                   var tom1= new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                    
                        case "k":
                   var tom2= new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                    case "s":
                   var tom3= new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                    case "j":
                   var tom4= new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                    case "d":
                  var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                    case "a":
                   var kickbass= new Audio("sounds/kick-bass.mp3");
                    kickbass.play();
                    break;
                    case "w":
                   var crash= new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                default:console.log(invalid keypress);
                    
            }
             
            
        };   
   

