const input = document.querySelectorAll("input");
input.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.querySelector(".btn").click();
    }
  });
});

const btn = document.querySelector(".btn");
btn.addEventListener( "click", function(){
  const imie = document.querySelector("#imie").value;
  const nazwisko = document.querySelector("#nazwisko").value;
  if( imie && nazwisko ){
    let html = "";
    html += '<div class="center">';
    html += 'Wartości: ' + '"' +imie+ '"' + ' , ' + '"' +nazwisko+ '"' + ' nie są poprawne, odpowiedź znajduje się na poprzedniej stronie';
    html += '</div>';
    html += '<button onclick="location.reload();">odświerz strone</button>';
    document.body.outerHTML = html;
  }else{
    alert("oba pola musza być pełne");
  }

} );
