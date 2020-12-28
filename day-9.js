//var n = parseInt(readLine(), 10);
var n = parseInt(439, 10);
const countArray = [];
let count = 0;
let inputBinary = n.toString(2).split('');
/*
transforma N em binário e divide cada número em um array
corre por cada um e verifica se é 1, se for aumenta o count
se não, zera o count e joga no array o que acumulou
Sort decrescente para pegar a última 
contagem e apresenta a última do array[0]
*/
inputBinary.forEach((digit, index) => {
  if (digit === '1') {
    count++;
    console.log(digit);
    if (index === inputBinary.length - 1) {
      countArray.push(count);
      console.log('yes');
    }
  } else {
    countArray.push(count);
    count = 0;
  }
});
console.log(countArray.sort((a, b) => b - a)[0]);
