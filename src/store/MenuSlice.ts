import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Food {
    id?: number;
    name: string;
    price: number;
    photo: string | ArrayBuffer | null;
    quantity?: any;
}

export interface MenuState {
    foods: Food[];
    order: Food[];
}


const initialState: MenuState = {
    foods: [],
    order:[]
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        addFood: (state, action: PayloadAction<Food>) => {
            state.foods.push(action.payload);
        },
        addToOrder: (state, action: PayloadAction<Food>) => {
            const found = state.order.find(el => el.id === action.payload.id)
            if(found){
                state.order = state.order.map(el => el.id === action.payload.id ?
                   {...el, quantity: el.quantity + 1}: el ) 
            }else{
                state.order.push({...action.payload, quantity:1});
            }
        },
        deleteOrder: (state, action:PayloadAction<Food>) => {
            state.order = state.order.filter(el => el.id !== action.payload.id);
        }
        
    },
});


export const { addFood, addToOrder,deleteOrder } = menuSlice.actions;

export default menuSlice.reducer;