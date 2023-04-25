import CareScale from './CareScale'

import '../styles/PlantItem.css'

// const needSomeLight = (light) => {
//   switch (light) {
//     case 1:
//       alert('Cette plante requiert peu de lumière')
//       break;
//     case 2:
//       alert('Cette plante requiert modérement de lumière')
//       break;
//     case 3:
//       alert('Cette plante requiert beaucoup de lumière')
//       break
//     default:
//       alert('Besoin de rien')
//   }
// }

// const needSomeWater = (water) => {
//   switch (water) {
//     case 1:
//       alert('Cette plante requiert peu d\'arrosage')
//       break;
//     case 2:
//       alert('Cette plante requiert modérement d\'arrosage')
//       break;
//     case 3:
//       alert('Cette plante requiert beaucoup d\'arrosage')
//       break
//     default:
//       alert('Besoin de rien')
//   }
// }

const PlantItem = ({name, cover, isSpecialOffer, price, light, water}) => {
  return <li className='lmj-plant-item'>
      <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
      <span className='lmj-plant-name'>{name}</span>
      <span className='lmj-plant-price'>{price}€</span>
      {isSpecialOffer && <span className='lmj-sales'>Solde</span>}
      <div className='lmj-plant-state-indicator'>
        {/* <div onClick={() => needSomeLight(light)}> */}
          <CareScale scaleValue={light} careType='light'/>
        {/* </div>
        <div onClick={() => needSomeWater(water)}> */}
          <CareScale scaleValue={water} careType='water'/>
        {/* </div> */}
      </div>
    </li>
    
}

export default PlantItem