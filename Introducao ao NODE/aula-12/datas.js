const {DateTime, Interval} = require('luxon')

const agora = DateTime.now()
console.log(agora.month)
console.log(new Date().toLocaleDateString()) //Api nativa JS
console.log(new Date().toLocaleDateString('en-US')) //Api nativa JS
// console.log(new Date().getDate()) //Api nativa JS

const dataDoAniversario = DateTime.fromFormat('20/11/1998', 'dd/MM/yyyy')
console.log(dataDoAniversario.month)
console.log(dataDoAniversario.day)

const idade = Interval.fromDateTimes(dataDoAniversario, agora).length('year')
console.log(`Idade: ${Math.floor(idade)}`)

const isoDate = '2020-11-19T21:22:00-0300';
const RFC = 'Sun, 09 Mar 1997 13:45:00 -0500';

console.log(DateTime.fromISO(isoDate).toLocaleString())
console.log(DateTime.fromRFC2822(RFC).toLocaleString())