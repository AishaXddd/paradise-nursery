import {createSlice} from "@reduxjs/toolkit";
export const CartSlice=createSlice({name:"cart",initialState:{items:[]},reducers:{
addItem:(state,action)=>{const p=action.payload;const item=state.items.find(x=>x.id===p.id);if(item)item.quantity+=1;else state.items.push({...p,quantity:1});},
removeItem:(state,action)=>{state.items=state.items.filter(x=>x.id!==action.payload);},
updateQuantity:(state,action)=>{const {id,quantity}=action.payload;const item=state.items.find(x=>x.id===id);if(!item)return;if(quantity<=0)state.items=state.items.filter(x=>x.id!==id);else item.quantity=quantity;}
}});
export const {addItem,removeItem,updateQuantity}=CartSlice.actions; export default CartSlice.reducer;