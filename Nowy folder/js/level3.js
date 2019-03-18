let formControl  = document.querySelector(".form-control");

formControl.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.querySelector(".btn").click();
  }
});

function myFunc(){
  let n = document.querySelector(".form-control").value;
  let smallN = n.toLowerCase();
  if( smallN === "nie" ){
    console.log("gratulacje");
    window.alert("gratuluje, to poprawna odpowiedz");
    window.open( "css/kapsw/nabzd.html", "_self" );
  }else{
    console.log("to błędna odpowiedź");
    window.alert("to błędna odpowiedź, spróbuj jeszcze raz");
  }
}

const btn = document.querySelector(".btn");

btn.addEventListener( "click", myFunc );
