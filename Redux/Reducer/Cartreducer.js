
import { ADDCART, REMOVECART, LOGIN } from "../Action";


const initialstate = {

    cartitems: [],

    login: false
}


const cartreducer = (state = initialstate, action) => {

    const { type, payload } = action

    switch (type) {

        case 'ADDCART':

            const itemtoadd = payload;


            //   const checkindex = state.cartitems.findIndex(item => item._id === itemtoadd._id)

            const checkindex = state.cartitems.find(item => item._id === itemtoadd._id)

            if (checkindex) {
                //item is alredey there here
                return {

                    ...state,

                    cartitems: state.cartitems.map((data) => data._id === itemtoadd._id ? { ...data, count: data.count + 1 } : data

                    )
                }





            } else {

                return {

                    ...state, cartitems: [...state.cartitems, { ...itemtoadd, count: parseInt(1) }]
                }
            }






        case 'REMOVECART':




            const itemtoremove = payload;

            const checkindexremove = state.cartitems.find(item => item._id === itemtoremove._id)


            if (checkindexremove.count === 1) {
                //item is alredey there here
                return {

                    ...state, cartitems: state.cartitems.filter((data) => data._id !== itemtoremove._id)
                }


            } else {

                return {

                    ...state,

                    cartitems: state.cartitems.map((data) => data._id === itemtoremove._id ? { ...data, count: data.count - 1 } : data

                    )
                }


            }

             case 'LOGIN':
                
                return{
                    ...state, login:!state.login
                }


        default:

            return state;

    }
}




export default cartreducer;