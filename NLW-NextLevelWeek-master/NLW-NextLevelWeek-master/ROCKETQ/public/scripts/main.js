import Modal from './modal.js'

const modal = Modal()
// Diferenciar as modals
const modalTitle = document.querySelector('.modal h2')
const modalDescrition = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach( button => {
    // Adicionar a escuta
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

// Quando o botão delete for clicado, ele abre a modal
deleteButton.forEach( button => {
    // Adicionar a escuta
    button.addEventListener('click',(event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id


    const form = document.querySelector('.modal form')
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML= `${text} esta pergunta`
    modalDescrition.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
    modalButton.innerHTML= `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    // Abrir modal
    modal.open()
}



