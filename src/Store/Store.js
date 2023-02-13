import create from "zustand";

 export const useStore = create((get, set) => ({
    cart: [],
    AddToCart: (items) => {
        console.log("items",items)
        
        const existingCart = get().cart;
        console.log("This is existingCart",existingCart)
        let CartItems = {...existingCart, quantity: 1};
        console.log("cartItems", CartItems);
        const existingitems = existingCart.find((items) => items.id === CartItems.id)
    
        if(existingitems) {
            CartItems = {
                ...CartItems,
                quantity: existingitems.quantity += 1,
            };
            const UpdatedProducts = existingCart.map((item) => {
                if(item.id === CartItems.id) {
                    return {
                        ...CartItems,
                    }
                } else {
                    return item;
                }
            });
            set({
                cart: [...UpdatedProducts],
            });
        } else {
            set({
                cart: [...existingCart, CartItems],
            });
        }




    }



}))

