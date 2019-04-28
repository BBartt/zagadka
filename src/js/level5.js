document.querySelector(".level5__btn").addEventListener( "click", function(e){
  e.preventDefault();
  const input = document.querySelector("input");

  if( input.value.toLowerCase() === "torchwood" ){
    console.log(input.value);
    window.alert("gratuluje przeszedłeś wszystkie poziomy");
    congratulation();
  }else{
    window.alert("przykro mi, spróbuj jeszcze raz");
  }
});

function congratulation(){
  let html =
  `
  <video class="film col-12" src="../../video/Congratulations!!!!.mp4" loop autoplay></video>
  <div class="congratulations">gratuluje</div>
  `;
  document.body.outerHTML = html;
}
