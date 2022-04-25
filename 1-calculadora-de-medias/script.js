function Calcular() {
  const btn = document.querySelector("button");
  const res = document.querySelector("#resultado");

  btn.addEventListener('click', function () {
    const nota1 = parseFloat(document.querySelector("#nota-1").value);
    const nota2 = parseFloat(document.querySelector("#nota-2").value);
    const nota3 = parseFloat(document.querySelector("#nota-3").value);
    const nota4 = parseFloat(document.querySelector("#nota-4").value);


    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    if (media > 7) {
      res.innerHTML = `Parabéns, você passou!<br> Sua média foi ${media}`
    } else if (media >= 5) {
      res.innerHTML = `Parabéns! <br>Sua média final foi ${media}.`
    } else {
      res.innerHTML = `Você ficou abaixo da média.<br> Sua média final foi ${media}`
    }
  })
}


Calcular();
