document.querySelector(".level3__btn").addEventListener( "click", function(e){
  e.preventDefault();
  let n = document.querySelector(".form-control").value;
  if( n.toLowerCase() === "nie" ){
    console.log("gratulacje");
    window.alert("gratuluje, to poprawna odpowiedz");
    window.open( "css/kapsw/nabzd.html", "_self" );
  }else{
    console.log("to błędna odpowiedź");
    window.alert("to błędna odpowiedź, spróbuj jeszcze raz");
  }

});
