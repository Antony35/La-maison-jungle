import { plantList } from '../datas/plantList'
import { useState } from 'react'
import Categories from './Categories'
import PlantItem from './PlantItem'

import '../styles/ShoppingList.css'

const ShoppingList = ({cart, updateCart}) => {
  const [activeCategory, setActiveCategory] = useState('')

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
      []
  )
  function addCart(name, price) {
    const plantAlreadyAdd = cart.find((plant) => plant.name === name)
    if (plantAlreadyAdd) {
       const cartFilterplantAlreadyAdd = cart.filter((plant) => plant.name !== name)
       updateCart([
          ...cartFilterplantAlreadyAdd, 
          { name, price, amount : plantAlreadyAdd.amount + 1 }
        ])
    } else {
        updateCart([
          ...cart, {name, price, amount: 1}
        ])
      }
  }
  return  <div>
            <div className='lmj-categories'>
            <Categories 
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            </div>
            <ul className='lmj-plant-list'>
                {
                  plantList.map(({name, cover, id, isSpecialOffer, light, water, price, category}) => {
                    console.log(activeCategory)
                    return (
                      !activeCategory || activeCategory === category ?  (
                      <div key={id}>
                        <PlantItem
                          name={name}
                          cover={cover}
                          id={id}
                          isSpecialOffer={isSpecialOffer}
                          price={price}
                          light={light}
                          water={water} 
                          />
                          <button className='lmj-button-add' onClick={() => addCart(name, price)}>Ajouter</button>
                      </div>
                      ) : null
                    )
                  })
                }
            </ul>
          </div>
}

export default ShoppingList