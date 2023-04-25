import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('adress@exemple.fr')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	function sentForm(e) {
		e.preventDefault()
		if (inputValue === 'adress@exemple.fr' || inputValue === '') {
			alert('Merci de renseigner une adress')
		} else {
			alert('Merci pour votre partage')
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
        <form className='lmj-form'>
					<input
						value={inputValue} 
						onChange={handleInput}
						onBlur={handleBlur} />
					<button onClick={sentForm} type='submit'>
						Envoyer
					</button>
				</form>
		</footer>
	)
}

export default Footer