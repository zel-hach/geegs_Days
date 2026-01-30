 function myMove(){
   const elem = document.getElementById("animate");
   const container = document.getElementById("container");
   let pos = 0;
   const id = setInterval(move, 1);
   function move(){
      if(pos == container.offsetWidth - elem.offsetWidth){
         clearInterval(id);
      } else {
         pos++;
         elem.style.left = pos + "px";
      }
    }
 }