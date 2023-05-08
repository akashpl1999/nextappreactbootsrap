export const ADDCART = "ADDCART"
export const REMOVECART = 'REMOVECART'

export const LOGIN="LOGIN"

export const addtocart = (data) => {
    console.log(data)


    return {
        type: "ADDCART",
        payload: data
    }
}



export const removefromcart = data => {
    return {
        type: "REMOVECART",
        payload: data

    }

}

export const loginstaus=()=>{
    return{
        type:'LOGIN'
      }
}



