/* 

*/
'use strict';

const empresas = [
{nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
{nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975},
{nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968},
{nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004},
{nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006},
{nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}

];
const anoDeCriacao = empresas.filter(empresas =>(empresas.anoDeCriacao <2000));
console.log(anoDeCriacao);

const exiberInfomracoes = empresas.map (empresas => `${empresas.nome }  ` + 'CEO' +  `  ${ empresas.CEO}  `);
console.log(exiberInfomracoes);


let verSevai = [
    {valor: 8},
    {valor: 7},
    {valor: 15},
    {valor: 19},
];

const total = verSevai.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valor);
}, 0);

console.log(total);