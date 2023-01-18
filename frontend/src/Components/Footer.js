import React, { useState } from 'react';
import "../Styles/footer.css";

const Footer = () => {
    const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}
   
	return (
		<footer className='cacty_footer'>
			<div className='cacty_footer_elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='cacty_footer_elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer;
