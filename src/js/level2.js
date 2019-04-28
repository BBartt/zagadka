document.querySelector(".level2__btn").addEventListener( "click", function(e){
  e.preventDefault();

  const imie = document.querySelector("#name").value;
  const nazwisko = document.querySelector("#surname").value;

  if( imie && nazwisko ){
    let html = `
    <div class="center">
      Wartości: ${imie}, ${nazwisko} nie są poprawne.
      <br />
      Odpowiedź znajduje się na poprzedniej stronie
    </div>
    <button onclick="location.reload();">odświerz strone</button>
    `;
    document.body.outerHTML = html;
  }else{
    alert("oba pola musza być pełne");
  }

});
