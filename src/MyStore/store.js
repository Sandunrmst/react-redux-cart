
import {configureStore} from "@reduxjs/toolkit"
import cartSliceRedcuer from "./reducers/cartSlice"
import laptopSliceReducer from "./reducers/laptopSlice"

const store = configureStore({
    reducer:{
        cart: cartSliceRedcuer,
        laptop: laptopSliceReducer
    }
})

export default store