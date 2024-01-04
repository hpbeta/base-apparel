const input = document.querySelector('#inputs')
const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const inputText = input.value
    const primeiroParagrafo = document.querySelector(".input + p");
    console.log(primeiroParagrafo)
    if (inputText === "") {
        input.classList.add('campo-requerido')
        input.classList.remove('campo-sucess')
        primeiroParagrafo.classList.remove('ativo')
        


    } else  {
        input.classList.remove('campo-requerido')
        input.classList.add('campo-sucess')
        primeiroParagrafo.classList.add('ativo')

    }
})