import '../styles/Cart.css'
import bin from '../assets/recycle-bin.png'
import basket from '../assets/paniers.png'
import { useState } from 'react'

function Cart({cart, updateCart}) {
  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  )
  document.title = `LMJ: ${total}€ d'achats`

  function deletePlant(e) {
    const target = e.currentTarget.parentNode.innerText.split(' ')
    const targetName = target[0]
    const targetName2 = target[0] + ' ' + target[1]
    updateCart(cart.filter(plant => plant.name !== targetName && plant.name !== targetName2))
  }
  return isOpen ? (
    <div className='lmj-cart'>
      <button className='lmj-closeButton' onClick={() => setIsOpen(false)}>
        Fermer le panier
      </button>
      {cart.length > 0 ? (
      <div>
        <h2>Panier</h2>
        <ul>
          {cart.map(({name, price, amount}, index) => (
            <div  key={`${name}-${index}`}>
              {name} {price}€ x {amount} <button className='lmj-button-plant-bin' onClick={(e) => deletePlant(e)}><img className='lmj-plant-bin' src={bin} alt='bin'/></button>
            </div>
          ))}
        </ul>
        <h3>Total : {total}€</h3>
        <button onClick={() => updateCart([])}>
          Vider le panier
        </button>
      </div> )
    : (
        <div>Votre panier est vide</div>
      )} 
      </div>
  ) : <button className='lmj-openButton' onClick={() => setIsOpen(true)}>
        <img className='lmj-basketButton' src={basket} alt='panier' />
      </button>
}

export default Cart