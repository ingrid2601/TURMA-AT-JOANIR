function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

inserirNome();

let linguagens = ["JavaScript", "Python", "C++"];
console.log (linguagens [0]);
console.log (linguagens [1]);
console.log (linguagens [2]);


const lista = document.querySelector ("#lista");
lista.textContent = linguagens [0];
lista.textContent = linguagens [1];
lista.textContent = linguagens [2];



const item = document.querySelector("#lista");
item.textContent = linguagens [0] +"-" + linguagens [1] +"-"+ linguagens [2]


let aluno1 = {
  nome: "Gabriel",
  idade: 13,
  anoLetivo: "2ºsérie",
  materiasFavoritas: ["Geografia","Programação","Arte"]
}

console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[0]);

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;
objeto.textContent = aluno1.idade;
objeto.textContent = aluno1.anoLetivo;







