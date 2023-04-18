import { useRouter } from "next/router";


function Review(){
    const router = useRouter();
    const { Newproid,reviewid } = router.query
    return  <h1> review {reviewid} for product {Newproid}</h1>
}

export default Review