const btn = document.querySelector(".btn");
btn.addEventListener( "click", a );

function a(){
  if( dzban.value.toLowerCase() === "dzban" ){
    console.log(dzban);
    window.alert("jesteś bardzo blisko");
  }else{
    window.alert("to niepoprawna odpowiedz");
  }
}

let dzban = document.querySelector(".dzban");
dzban.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.querySelector(".btn").click();
  }
});
