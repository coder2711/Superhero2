var canvas = new fabric.Canvas('myCanvas');
player_x= 10;
player_y= 10;

block_width= 150;
block_height= 150;

player_img="";
block_img= "";

function update_player(){
    fabric.Image.fromURL("player.png" , function(img){
        player_img= img;

        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);

        player_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_img);

    })
}

function make_blocks(get_image){
    fabric.Image.fromURL(get_image , function(add){
        block_img= add;

        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);

        block_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img);
    })
}

window.addEventListener("keydown", my_kedown);
function my_kedown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '80'){
        console.log("P is pressed with Shift");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("present_width").innerHTML=block_width;
        document.getElementById("present_height").innerHTML=block_height;
      }
      if(e.shiftKey == true && keypressed == '77'){
          console.log("M is pressed with Shift");
          block_height = block_height - 10;
          block_width = block_width - 10;
          document.getElementById("present_width").innerHTML=block_width;
          document.getElementById("present_height").innerHTML=block_height;
      }
    if(keypressed == '38'){
        //up();
        console.log("up");
    } 
    if(keypressed == '40'){
        //down();
        console.log("down");
    }
    if(keypressed == '37'){
        //left();
        console.log("left");
    }
if(keypressed == '39'){
        //right();
        console.log("right");
    }
    if(keypressed == '72'){
        make_blocks("spiderman_face.png");
        console.log("H");
    }
    if(keypressed == '66'){
        make_blocks("hulkd_body.png");
        console.log("B");
    }
    if(keypressed == '76'){
        make_blocks("captain_america_left_hand.png");
        console.log("L");
    }
    if(keypressed == '82'){
        make_blocks("thor_right_hand.png");
        console.log("R");
    }
    if(keypressed == '70'){
        make_blocks("ironman_legs.png");
        console.log("F");
    }
}