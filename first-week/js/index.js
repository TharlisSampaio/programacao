// Overview de JavaScript

// console
console.log('texto')
console.error('Mensagem de erro')
console.warn('Alerta')

// Variaveis

const nome = 'tharlis' // const uso para escopo global

let x = 10
console.log(nome)
if(true){
    let x = 20
    console.log(x)
}


// tipos de dados

// string
const nome2 = 'Maria'
console.log(nome2)
console.log(typeof nome2)

// number
let n = 10
console.log(n)
console.log(typeof n)

// bool
const isOpen = 0
console.log(isOpen)
console.log(typeof isOpen)

// null
const a = null
console.log(a)
console.log(typeof a)

// undefined
let nada
console.log(nada)
console.log(typeof nada)

// arry
const liguagens = ['C', 'Java', 'JS', 22, true, '']
console.log(liguagens[5])
console.log(typeof liguagens[5])

// objects literals
const user = {
    username: 'vrc',
    password: '123',
    age: 31,
    name: 'Tharlis'}
console.log(user)
console.log(typeof user)

// function myFunction() {
//     const formData = new FormData(document.querySelector('form'))
    
//     const inputValue = formData.get("fname")
    
//     console.log(inputValue)
//}

// metodos de string
const text = 'oi meu chapa'
console.log(text.length)
const textToArray = text.split(' ') // split quebra texto em um conjunto de caracteres
console.log(textToArray)
console.log(text.toLocaleLowerCase())
console.log(text.toLocaleUpperCase())
console.log(text.indexOf('oi')) // procurar algo dentro de uma string
console.log(text.charAt(text.length - 1))
console.log(text.slice(0, 7))

// mais sobre array
const chars = ['A', 'B', 'C', 7] // é possivel mudar os elementos do vetor, mas não é possivel mudar o tipo de 'chars': chars = 'novo conteudo'
console.log(chars.length)
console.log(chars[chars.length - 1])
chars[5] = 'F'
console.log(chars)
chars.pop()
console.log(chars)

