var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
block_object="";
function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        block_object=Img;
        block_object.scaleToWidth(700);
        blcook_object.scaleToHeight(600);
        blcok_object.set({
            top:0,
            left:0
        });
        canvas.add(block_object);

    });
	
}

function playSound(){
	x.play();
}
