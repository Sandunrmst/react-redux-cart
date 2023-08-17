
import './App.css'
import { useDispatch, useSelector } from "react-redux"
import store from './MyStore/store'
import { addItemToCart } from './MyStore/reducers/cartSlice'

function App() {
  const laptop = useSelector((store) => store.laptop)
  const cart = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  console.log(cart)
  return (
    <>
    <h1>Product List</h1>
     {laptop.map(({price,cpu,ram,id})=>
     <p key={id}> {price} | {cpu} | {ram} <button onClick={()=> dispatch(addItemToCart(id,price,cpu,ram))}>Add to Cart</button></p>)}

     <h1>Cart</h1>
     <h3>{cart.length}</h3>
     <h3>Total : $ 0</h3>
    </>
  )
}

export default App
