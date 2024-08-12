
window.onload= function(){

  let box = document.querySelector("#box");
  let btn = document.querySelector("#btn");
  let close = document.querySelector("#close")

  let boxstyle = box.style;

  btn.onclick = function(){
      if(boxstyle.display === "block"){
          boxstyle.display = "none";
      }else{
          boxstyle.display = "block";
      }
  };

  close.onclick= function(){
      boxstyle.display = "none";
  };

  }