import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { useState } from "react"

const Menu = () => {
  const [open ,setOpen] = useState(false)
  return (
    <nav className="border-gray-200  bg-second/70 backdrop-blur fixed w-full z-50 top-0 right-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* to home */}
        <Link to="/" >
          <img src="photo/logo.png" className="h-8 md:h-11" alt="Logo" />
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="  p-3  rounded-full md:hidden hover:bg-gray-950 " >
              <svg className="w-5 h-5  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent className="text-white">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
              </SheetDescription>
            </SheetHeader>
            <ul className="flex mt-10 flex-col gap-8 font-semibold p-4 text-lg  text-white  ">
              <li onClick={()=>setOpen(false)}>
                <Link to="/" className="hover:text-primary/90" >الصفحة الرئيسية</Link>
              </li>
              <li>
                <Link onClick={()=>setOpen(false)} to="/test" className="hover:text-primary/90">خدماتنا</Link>
              </li>
              <li>
                <Link onClick={()=>setOpen(false)} to="/test" className="hover:text-primary/90" >معرض الاعمال</Link>
              </li>
              <li>
                <Link onClick={()=>setOpen(false)} to="/test" className="hover:text-primary/90" >تغطية المؤتمرات</Link>
              </li>
              <li>
                <Link onClick={()=>setOpen(false)} to="/test" className="hover:text-primary/90" >تواصل معنا</Link>
              </li>
            </ul>
            <SheetFooter className="absolute text-end bottom-10 left-2 text-[12px] ">
              <p>© {new Date().getUTCFullYear()}  ROWAD PRODUCTION . All rights reserved</p>
              <p>شركة رواد برودكشن للدعاية و الاعلان</p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <ul className="hidden md:flex gap-8 font-semibold p-4 lg:text-lg  text-white  ">
          <li>
            <Link to="/" className="hover:text-primary/90" >الصفحة الرئيسية</Link>
          </li>
          <li>
            <Link to="/test" className="hover:text-primary/90">خدماتنا</Link>
          </li>
          <li>
            <Link to="/test" className="hover:text-primary/90" >معرض الاعمال</Link>
          </li>
          <li>
            <Link to="/test" className="hover:text-primary/90" >تغطية المؤتمرات</Link>
          </li>
          <li>
            <Link to="/test" className="hover:text-primary/90" >تواصل معنا</Link>
          </li>
        </ul>
      </div>

    </nav>

  )
}

export default Menu