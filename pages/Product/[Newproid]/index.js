import {useRouter} from 'next/router'

function Productdetail(){
    const router =useRouter()
    const productid =router.query.Newproid
    return <h1>product {productid}</h1>
}

export default Productdetail