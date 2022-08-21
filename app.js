function shuffle(){
	const img = document.querySelector('#img')
	const out = document.querySelector('.out')

	let randomNumber = Math.floor(Math.random() * 6) + 1;
	img.setAttribute("src", `./image/${randomNumber}.png`);

	out.innerHTML = `Ваш результат: ${randomNumber}`
}



