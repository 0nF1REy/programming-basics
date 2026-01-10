var btnsomar = document.getElementById("btn-somar");
btnsomar.addEventListener("click", somar);

var btnsub = document.getElementById("btn-sub");
btnsub.addEventListener("click", subtrair);

var btnmult = document.getElementById("btn-mult");
btnmult.addEventListener("click", multiplicar);

var btndiv = document.getElementById("btn-div");
btndiv.addEventListener("click", dividir);

function somar() {
  // console.log('Funcionou');
  var tn1 = document.getElementById("txtn1");
  var tn2 = document.getElementById("txtn2");
  var res = document.getElementById("res");

  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);

  var soma = n1 + n2;

  res.innerText = `A soma de ${n1} + ${n2} é igual a ${soma}`;
}

function subtrair() {
  // console.log('Funcionou');
  var tn1 = document.getElementById("txtn1");
  var tn2 = document.getElementById("txtn2");
  var res = document.getElementById("res");

  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);

  var sub = n1 - n2;

  res.innerText = `A soma de ${n1} - ${n2} é igual a ${sub}`;
}

function multiplicar() {
  // console.log('Funcionou');
  var tn1 = document.getElementById("txtn1");
  var tn2 = document.getElementById("txtn2");
  var res = document.getElementById("res");

  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);

  var mult = n1 * n2;

  res.innerText = `A soma de ${n1} x ${n2} é igual a ${mult}`;
}

function dividir() {
  // console.log('Funcionou');
  var tn1 = document.getElementById("txtn1");
  var tn2 = document.getElementById("txtn2");
  var res = document.getElementById("res");

  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);

  var div = n1 / n2;

  res.innerText = `A soma de ${n1} / ${n2} é igual a ${div}`;
}
