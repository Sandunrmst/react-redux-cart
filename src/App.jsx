
import './App.css'
import { useDispatch, useSelector } from "react-redux"
import store from './MyStore/store'
import { addItemToCart } from './MyStore/reducers/cartSlice'

function App() {
  const laptop = useSelector((store) => store.laptop)
  const cart = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  console.log(cart)

  let Total = 0;
  if(Array.isArray(cart)){
    cart.forEach((ele)=>{
      Total = Total + ele.count * ele.price;
    }) 
  
  }

  //cart count 
  let cartCount = 0
  cart.forEach((ele)=> {
    cartCount = cartCount + ele.count;
  })
  return (
    <>
    <h1>Product List</h1>
     {laptop.map(({price,cpu,ram,id})=>
     <p key={id}> {price} | {cpu} | {ram} <button onClick={()=> dispatch(addItemToCart(id,price,cpu,ram))}>Add to Cart</button></p>)}

     <h1>Cart</h1>
     <h3>{cartCount}</h3>
     <h3>Total : Rs {Total}</h3>
    </>
  )
}

export default App
