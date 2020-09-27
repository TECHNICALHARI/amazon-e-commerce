import book1 from './Image/Books/book1.png';

export const initialState = {
    basket: [
        {
        id:"12321342",
        title:"This is the best bussiness book by which you can learn all about sale",
        price:4,
        rating:5,
        image1:book1,
    },
    {
        id:"12321342",
        title:"This is the best bussiness book by which you can learn all about sale",
        price:4,
        rating:5,
        image1:book1,
    }
],
    user:null,
};
export const getBasketTotal =(basket=>
    basket?.reduce((amount,item) => item.price+amount,0));
const reducer=(state, action)=> {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return{
                 ...state,
                basket:[...state.basket,action.item]
             }
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            // We cloned the basket
            let newBasket=[...state.basket];
            //  We check to see if product exists
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            if(index>=0){
                // item exist in basket,remove it....
                newBasket.splice(index,1)
            }
            else{
                console.warn(`Cant remove product(id:${action.id}) as its not present `)
            }
            return { ...state,
                basket:newBasket }
            break;
        default:
            return state;
    }
}
export default reducer;