import React from 'react';
import CareScale from './CareScale';
import '../Styles/plantItem.css';

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}



function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='cacty_plant_item' onClick={() => handleClick}>
			<span className='cacty_plant_item_price'>{price}€</span>
			<img className='cacty_plant_item_cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}
export default PlantItem;
