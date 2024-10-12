import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext.jsx'
import "./FoodDisplay.css"
import FoodItem from '../FoodItem/FoodItem.jsx'

const FoodDislay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top Spots Near You!</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
            if (category==="All" || category===item.category) {
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
      </div>
    </div>
  )
}

export default FoodDislay
