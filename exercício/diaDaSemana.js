// Escrever no console dia da semana de hoje por extenso.
// [ ]  Declarar um *array* para os nomes dos dias
// [ ]  Utilizar métodos `get` em um objeto data.

var diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

var data = new Date();

console.log(diasDaSemana[data.getDay()]);


