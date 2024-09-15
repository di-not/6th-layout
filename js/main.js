const questionBtnList = document.querySelectorAll('.questions__item')
const questionTextList = document.querySelectorAll('.questions__item-text')

questionBtnList.forEach(function (element) {
	element.addEventListener('click', event => {
		const targetQuestion = event.currentTarget
		const id = targetQuestion.dataset.text

		if (targetQuestion.classList.contains('questions__item-btn--active')) 
		{
			targetQuestion.classList.remove('questions__item-btn--active')
			document.querySelector(`#${id}`).classList.remove('questions__item-text--on')
			document.querySelector(`#${id}`).setAttribute('aria-hidden',true)
			document.querySelector(`#${id}`).style.maxHeight = null
			targetQuestion.setAttribute('aria-expanded',false)
		} 
		else 
		{
			targetQuestion.classList.add('questions__item-btn--active')
			document.querySelector(`#${id}`).classList.add('questions__item-text--on')
			document.querySelector(`#${id}`).setAttribute('aria-hidden', false)
			
			document.querySelector(`#${id}`).style.maxHeight ='77px'
			targetQuestion.setAttribute('aria-expanded',true)
		}	
		
	})
})

const aboutMainOffice = document.querySelector('.about-main-office-btn')
const cloudMessage = document.querySelector('.cloud__text')

aboutMainOffice.addEventListener('click', ()=>{
	cloudMessage.classList.toggle('cloud__text--open')
})

const burgerMenuBtn = document.querySelector('.burger-menu')
const navList = document.querySelector('.nav__list')
const closeBtn = document.querySelector('.close__btn')

burgerMenuBtn.addEventListener('click', ()=>{
	navList.classList.toggle('nav__list--open')
})

closeBtn.addEventListener('click',()=>{
	navList.classList.remove('nav__list--open')
})



const catalogBtn = document.querySelector('.catalog__left-btn')
const acceptBtn = document.querySelector('.accept-button')
const catalogLeft = document.querySelector('.catalog__left')

catalogBtn.addEventListener('click',()=>{
	catalogLeft.classList.toggle('catalog__left--open')
})

acceptBtn.addEventListener('click',()=>{
	catalogLeft.classList.remove('catalog__left--open')
})