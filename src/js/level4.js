document.querySelector(".level4__btn").addEventListener( "click", function(e){
  e.preventDefault();
  const dzban = document.querySelector(".dzban");

  if( dzban.value.toLowerCase() === "dzban" ){
    console.log(dzban);
    window.alert("jesteś bardzo blisko");
  }else{
    window.alert("to niepoprawna odpowiedz");
  }

});
