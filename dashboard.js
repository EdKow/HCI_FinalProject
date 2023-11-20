document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");

    var enterButton = document.getElementById("enterButton");

    modal.style.display = "block";
    button.style.display = "none"
    enterButton.onclick = function() {
        modal.style.display = "none"
        button.style.display = "block"
    }
});

var button = document.getElementById("writebutton");

button.addEventListener("scroll", function() {
  this.style.position = "fixed";
  this.style.bottom = "0";
  this.style.right = "0";
});

var write = document.getElementById("writepop");

button.onclick = function(){
    write.style.display = "block"
    if (write.style.display = "block") {
         button.style.display = "none"   
    }
    else {
        button.style.display = "button"
    }

};