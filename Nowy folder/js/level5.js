const input = document.querySelector("input");

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.querySelector(".btn").click();
  }
});

function congratulation()
{
  let html = "";
  html += '<video class="film col-12" src="../../video/Congratulations!!!!.mp4" loop autoplay></video>';
  html += '<div class="czcionka">gratuluje</div> ';

  document.body.outerHTML = html;
}

const btn = document.querySelector(".btn");

btn.addEventListener( "click", function(){
  if( input.value.toLowerCase() === "torchwood" ){
    console.log(input.value);
    window.alert("gratuluje przeszedłeś wszystkie poziomy");
    congratulation();
  }else{
    window.alert("przykro mi, spróbuj jeszcze raz");
  }
});
