import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id:1,
        price:522000,
        cpu:'i7',
        ram:'8GB'
    },
    {
        id:2,
        price:232000,
        cpu:'i5',
        ram:'8GB'
    },
    {
        id:3,
        price:122000,
        cpu:'i3',
        ram:'4GB'
    },
]

const laptopSlice = createSlice({
    name:'laptop',
    initialState,
    reducers:{
        addLaptop:(state,action) => {
            state.push(action.payload)
        }
    }
})


export const {addLaptop} = laptopSlice.actions
export default laptopSlice.reducer