import Menu from "@/components/Layout/Menu"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Loding from "./Loding"

const Layer = ()=>{
    return(
        <>
        
         <Suspense fallback={<Loding/>}>
         <Menu/>
         <Outlet/>          </Suspense>
        
        </>
       
    )
}
export default Layer