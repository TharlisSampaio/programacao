fetch('http://jsonplaceholder.typicode.com/users')
    .then(T => T.json())
    .then((dado)=> (dado.forEach(item => {
        const ul = document.querySelector('#text')
        ul.appendChild = `<li>aqui ${item['name']} ${item.email}</li>`
    })))
