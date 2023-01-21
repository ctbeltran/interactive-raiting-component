// Delcaración de variables
const card = document.querySelector('#card');
const cardThankYou = document.querySelector('#cardThankYou');
const scoreRaiting = document.querySelector('#scoreRaiting');
const cardRaiting = document.querySelectorAll('.card__raiting__label');
const submit = document.querySelector('.btn-submit');
const raiting = [...cardRaiting];
let score = 0;

// Declaración de funciones
const handleClick = (e) => {
  score = e.target.textContent;
}

const submitScore = () => {
  scoreRaiting.innerHTML = `You selected <strong>${score}</strong> out of 5`; 
  card.classList.add('d-none');
  cardThankYou.classList.remove('d-none')
}

const documentLoaded = () => {
  raiting.map(t => t.addEventListener('click', handleClick));  
  submit.addEventListener('click', submitScore)
}

//Asignación de eventos
window.addEventListener('DOMContentLoaded', documentLoaded)