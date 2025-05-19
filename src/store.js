import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import Cart from "./Cart";
import Dairy from "./Dairy";
import Chocolates from "./Chocolates";

const savedCart = localStorage.getItem("cart");
const localStorageCart = savedCart ? JSON.parse(savedCart) : [];

//create the slice
const productSlice = createSlice({
    name : 'products',
    initialState : {
        Veg : [
                {name: "Tomato", price: 50, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg"},
                {name: "Potato", price: 100, image:"/public/Images/Potato.jpg"},
                {name: "Onion", price: 80, image:"/public/Images/Onion.jpg"},
                {name: "Eggplant", price: 40, image:"/public/Images/Eggplant.jpg"},
                {name: "Ladyfingers", price: 60, image:"/public/Images/Ladyfingers.jpg"},
                {name: "Chilli", price: 150, image:"/public/Images/Chilli.jpg"},
                {name: "BottleGourd", price: 90, image:"/public/Images/BottleGourd.jpg"},
                {name: "Capsicum", price: 30, image:"/public/Images/Capsicum.jpg"},
                {name: "Cabbage", price: 80, image:"/public/Images/Cabbage.jpg"},
                {name: "Cauliflower", price: 70, image:"/public/Images/Cauliflower.jpg"},
                {name: "Carrot", price: 30, image:"/public/Images/Carrot.jpg"},
                {name: "Tomato", price: 50, image:"/public/Images/tamoto.jpg"},
                {name: "Potato", price: 100, image:"/public/Images/Potato.jpg"},
                {name: "Onion", price: 80, image:"/public/Images/Onion.jpg"},
                {name: "Eggplant", price: 40, image:"/public/Images/Eggplant.jpg"},
                {name: "Ladyfingers", price: 60, image:"/public/Images/Ladyfingers.jpg"},
                {name: "Chilli", price: 150, image:"/public/Images/Chilli.jpg"},
                {name: "BottleGourd", price: 90, image:"/public/Images/BottleGourd.jpg"},
                {name: "Capsicum", price: 30, image:"/public/Images/Capsicum.jpg"},
                {name: "Cabbage", price: 80, image:"/public/Images/Cabbage.jpg"},
                {name: "Cauliflower", price: 70, image:"/public/Images/Cauliflower.jpg"},
                {name: "Carrot", price: 30, image:"/public/Images/Carrot.jpg"},
                {name: "Tomato", price: 50, image:"/public/Images/tamoto.jpg"},
                {name: "Potato", price: 100, image:"/public/Images/Potato.jpg"},
                {name: "Onion", price: 80, image:"/public/Images/Onion.jpg"},
                {name: "Eggplant", price: 40, image:"/public/Images/Eggplant.jpg"},
                {name: "Ladyfingers", price: 60, image:"/public/Images/Ladyfingers.jpg"},
                {name: "Chilli", price: 150, image:"/public/Images/Chilli.jpg"},
                {name: "BottleGourd", price: 90, image:"/public/Images/BottleGourd.jpg"},
                {name: "Capsicum", price: 30, image:"/public/Images/Capsicum.jpg"},
                {name: "Cabbage", price: 80, image:"/public/Images/Cabbage.jpg"},
                {name: "Cauliflower", price: 70, image:"/public/Images/Cauliflower.jpg"},
                {name: "Carrot", price: 30, image:"/public/Images/Carrot.jpg"},
              
        ],
        NonVeg :[
                {name: "Chicken", price: 150, image:"/public/Images/Chicken.jpg"},
                {name: "Mutton", price: 300, image:"/public/Images/Mutton.jpg"},
                {name: "Fish", price: 200, image:"/public/Images/Fish.jpg"},
                {name: "Prawns", price: 250, image:"/public/Images/Prawns.jpg"},
                {name: "Eggs", price: 60, image:"/public/Images/Eggs.jpg"},
                {name: "Crab", price: 280, image:"/public/Images/Crab.jpg"},
                {name: "Duck", price: 220, image:"/public/Images/Duck.jpg"},
                {name: "Turkey", price: 270, image:"/public/Images/Turkey.jpg"},
                {name: "Quail", price: 180, image:"/public/Images/Quail.jpg"},
                 {name: "Prawns", price: 250, image:"/public/Images/Prawns.jpg"},
                {name: "Eggs", price: 60, image:"/public/Images/Eggs.jpg"},
                {name: "Squid", price: 230, image:"/public/Images/Squid.jpg"},
                {name: "Chicken", price: 150, image:"/public/Images/Chicken.jpg"},
                {name: "Mutton", price: 300, image:"/public/Images/Mutton.jpg"},
                {name: "Fish", price: 200, image:"/public/Images/Fish.jpg"},
                {name: "Prawns", price: 250, image:"/public/Images/Prawns.jpg"},
                {name: "Eggs", price: 60, image:"/public/Images/Eggs.jpg"},
                {name: "Crab", price: 280, image:"/public/Images/Crab.jpg"},
                {name: "Duck", price: 220, image:"/public/Images/Duck.jpg"},
                {name: "Turkey", price: 270, image:"/public/Images/Turkey.jpg"},
                {name: "Quail", price: 180, image:"/public/Images/Quail.jpg"},
                {name: "Squid", price: 230, image:"/public/Images/Squid.jpg"},
                 {name: "Quail", price: 180, image:"/public/Images/Quail.jpg"},
                {name: "Squid", price: 230, image:"/public/Images/Squid.jpg"},
                {name: "Chicken", price: 150, image:"/public/Images/Chicken.jpg"},
                {name: "Mutton", price: 300, image:"/public/Images/Mutton.jpg"},
                {name: "Fish", price: 200, image:"/public/Images/Fish.jpg"},
                {name: "Prawns", price: 250, image:"/public/Images/Prawns.jpg"},
                {name: "Eggs", price: 60, image:"/public/Images/Eggs.jpg"},
                {name: "Chicken", price: 150, image:"/public/Images/Chicken.jpg"},
                {name: "Mutton", price: 300, image:"/public/Images/Mutton.jpg"},
                {name: "Fish", price: 200, image:"/public/Images/Fish.jpg"},
                {name: "Prawns", price: 250, image:"/public/Images/Prawns.jpg"},
                {name: "Eggs", price: 60, image:"/public/Images/Eggs.jpg"},
                {name: "Crab", price: 280, image:"/public/Images/Crab.jpg"},
                {name: "Duck", price: 220, image:"/public/Images/Duck.jpg"},
                {name: "Turkey", price: 270, image:"/public/Images/Turkey.jpg"},
                {name: "Quail", price: 180, image:"/public/Images/Quail.jpg"},
                {name: "Squid", price: 230, image:"/public/Images/Squid.jpg"}
              ],
        Dairy :[
                {name: "Curd", price: 50, image:"public/Images/curd.webp"},
                {name: "Butter", price: 70, image:"public/Images/Butter.jpg"},
                {name: "Cheese", price: 100, image:"public/Images/cheese.jpg"},
                {name: "Curd", price: 80, image:"public/Images/curd1.jpg"},
                {name: "Milk", price: 60, image:"public/Images/Milk.jpg"},
                {name: "Milk", price: 80, image:"public/Images/milk1.jpg"},
                {name: "Curd", price: 40, image:"public/Images/curd1.jpg"},
                {name: "Milk", price: 70, image:"public/Images/milk2.jpg"},
                {name: "Curd", price: 50, image:"public/Images/curd.webp"},
                {name: "Butter", price: 70, image:"public/Images/Butter.jpg"},
                {name: "Cheese", price: 100, image:"public/Images/cheese.jpg"},
                {name: "Curd", price: 80, image:"public/Images/curd1.jpg"},
                {name: "Milk", price: 60, image:"public/Images/Milk.jpg"},
                {name: "Milk", price: 80, image:"public/Images/milk1.jpg"},
                {name: "Curd", price: 40, image:"public/Images/curd1.jpg"},
                {name: "Milk", price: 70, image:"public/Images/milk2.jpg"},
                {name: "Curd", price: 50, image:"public/Images/curd.webp"},
                {name: "Butter", price: 70, image:"public/Images/Butter.jpg"},
                {name: "Cheese", price: 100, image:"public/Images/cheese.jpg"},
                {name: "Curd", price: 80, image:"public/Images/curd1.jpg"},
                {name: "Milk", price: 60, image:"public/Images/Milk.jpg"},
                {name: "Milk", price: 80, image:"public/Images/milk1.jpg"},
                {name: "Curd", price: 40, image:"public/Images/curd1.jpg"},
                {name: "Milk", price: 70, image:"public/Images/milk2.jpg"},
                {name: "Curd", price: 50, image:"public/Images/curd.webp"},
                {name: "Butter", price: 70, image:"public/Images/Butter.jpg"},
                {name: "Cheese", price: 100, image:"public/Images/cheese.jpg"},
                {name: "Curd", price: 80, image:"public/Images/curd1.jpg"},
                {name: "Milk", price: 60, image:"public/Images/Milk.jpg"},
                {name: "Milk", price: 80, image:"public/Images/milk1.jpg"},
                {name: "Curd", price: 40, image:"public/Images/curd1.jpg"},
                {name: "Milk", price: 70, image:"public/Images/milk2.jpg"},
               ],
        Chocolates :[
                {name: "5 Star", price: 100, image:"public/Images/5Star.jpg"},
                {name: "Cadbury", price: 70, image:"public/Images/cadbury.jpg"},
                {name: "Chocolates", price: 100, image:"public/Images/Chocolate.jpg"},
                {name: "DairyMilk", price: 150, image:"public/Images/DairyMilk.jpg"},
                {name: "Richart", price: 200, image:"public/Images/Richart.jpg"},
                {name: "Silk", price: 180, image:"public/Images/silk.jpg"},
                {name: "DairyMilk", price: 150, image:"public/Images/DairyMilk.jpg"},
                {name: "Chocolates", price: 100, image:"public/Images/Chocolate.jpg"},
                {name: "5 Star", price: 100, image:"public/Images/5Star.jpg"},
                {name: "Cadbury", price: 70, image:"public/Images/cadbury.jpg"},
                {name: "Chocolates", price: 100, image:"public/Images/Chocolate.jpg"},
                {name: "DairyMilk", price: 150, image:"public/Images/DairyMilk.jpg"},
                {name: "Richart", price: 200, image:"public/Images/Richart.jpg"},
                {name: "Silk", price: 180, image:"public/Images/silk.jpg"},
                {name: "DairyMilk", price: 150, image:"public/Images/DairyMilk.jpg"},
                {name: "Chocolates", price: 100, image:"public/Images/Chocolate.jpg"},
                {name: "5 Star", price: 100, image:"public/Images/5Star.jpg"},
                {name: "Cadbury", price: 70, image:"public/Images/cadbury.jpg"},
                {name: "Chocolates", price: 100, image:"public/Images/Chocolate.jpg"},
                {name: "DairyMilk", price: 150, image:"public/Images/DairyMilk.jpg"},
                {name: "Richart", price: 200, image:"public/Images/Richart.jpg"},
                {name: "Silk", price: 180, image:"public/Images/silk.jpg"},
                {name: "DairyMilk", price: 150, image:"public/Images/DairyMilk.jpg"},
                {name: "Chocolates", price: 100, image:"public/Images/Chocolate.jpg"},
                
              ]
              
    },
    reducers : {}
});



//create the cartSlice
const cartSlice = createSlice({
    name : 'cart',
    initialState : localStorageCart,
    reducers : {
        addToCart : (state, inputItem) => {
            const item = state.find(item => item.name === inputItem.payload.name);
            if(item){
                item.quantity += 1;
            } else {
                state.push({...inputItem.payload, quantity: 1});
            }
        },
        incCart : (state, inputItem) => {
            let item = state.find(item => item.name === inputItem.payload.name);
            if(item){
                item.quantity += 1;
            }
        },
        decCart: (state, action) => {
            const index = state.findIndex(item => item.name === action.payload.name);
            if (index !== -1) {
                if (state[index].quantity > 1) {
                    state[index].quantity -= 1;
                } else {
                    state.splice(index, 1);
                }
            }
        },
        removeCart :(state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        ClearCart : () => [],
    },
});



const userSlice = createSlice({
  name: 'users',
  initialState: { 
    user : [],
    isAuthenticated: false,
    currentUser : null,
  },
  reducers: {
   loginUser: (state, action) => {
  const { name } = action.payload;
  const userFound = state.user.find(user => user.name === name);

  if (userFound) {
    state.isAuthenticated = true;
    state.currentUser = userFound;
   
  } else {
    state.isAuthenticated = false; //  update auth state
    state.currentUser = null;      //  reset user
    
  }
},
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
    registerUser : (state, action) => {
        state.user.push(action.payload);
    }
  },
});

export const { loginUser, logoutUser, registerUser} = userSlice.actions;

const orderSlice = createSlice({
    name : 'orders',
    initialState : [],
    reducers :{
        addOrder: (state, action) => {
        state.push(action.payload);
        }
    }
})

export let {addToCart, incCart, decCart, removeCart,ClearCart} = cartSlice.actions;
export let {addOrder} = orderSlice.actions

//configure the store
const store = configureStore({
    reducer : {
        products : productSlice.reducer,
        cart : cartSlice.reducer,
        orders : orderSlice.reducer,
        users: userSlice.reducer,
    }
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cart",JSON.stringify(state.cart));
})


export default store;