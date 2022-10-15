import Link from "next/link";
import React, {useEffect } from 'react';
import useRouter from 'next/router'

const notFound = () => {
    useEffect(()=>{
       let router = useRouter 
        setTimeout(() => {
            router.push('/')
        }, 3000);
    },[])
    return ( 
        <center>
            <h1>
                404 | not found
            </h1>
            <h3>
                <Link href='/'>to home page</Link>
            </h3>
        </center>
     );
}
 
export default notFound;