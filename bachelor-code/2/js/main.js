// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', /*INSERTCODE*/)
// document.querySelector('#claireNext').addEventListener('click', /*INSERTCODE*/)
// document.querySelector('#sharleenNext').addEventListener('click', /*INSERTCODE*/)

// function andiNext(){
// 	claire.classList.add(/*INSERTCODE*/)
// 	sharleen.classList.add(/*INSERTCODE*/)
// 	andi.classList.toggle(/*INSERTCODE*/)
// }

// function claireNext(){
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
// }

// function sharleenNext(){
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
// }



const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')


document.querySelector('#andiNext').addEventListener('click', andiWinner)
document.querySelector('#claireNext').addEventListener('click', claireWinner)
document.querySelector('#sharleenNext').addEventListener('click', sharleenWinner)


function andiWinner (){
	claire.classList.add('hidden')
	sharleen.classList.add('hideen')
	andi.classList.toggle('hidden')

}

function claireWinner(){
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenWinner(){
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}