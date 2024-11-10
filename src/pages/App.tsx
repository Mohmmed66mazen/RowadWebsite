import CardServiec from "../components/myUi/CardServiec"
import Gallery from "../components/myUi/Gallery"
import LogoCollection from "../components/myUi/LogoCollection"
import CardNumber from "../components/myUi/CardNumber"
import Card from "../components/myUi/Card"
import { useEffect } from "react"




function App() {

useEffect(()=>{
  const elements = document.querySelectorAll('.counter')
  const NumberAnmtion = (start:number,end:number,time:number,element:IntersectionObserverEntry)=> {

    element.target.innerHTML  = start.toString()
    start++;

    if (start <= end) setTimeout(()=>{ NumberAnmtion(start,end,time,element) }, time);
}

   const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        
      if (entry.isIntersecting) {

        if(!entry.target.getAttribute('ison')){

          const end:number = +entry.target.getAttribute('end')!
          const time:number = +entry.target.getAttribute('time')!

          NumberAnmtion(0,end,time,entry)

          entry.target.setAttribute('ison','true')
        }
      }
     
    });
  });
  
elements.forEach((e)=>{
    observer.observe(e);
 })
 return ()=>{
 observer.disconnect()
 }
},[])

  return (
    <>

      <main className='h-svh text-white  w-full mt-[70px] md:mt-0'>
        <img className="max-h-[100svh] min-h-[50vw] w-full bg-cover object-cover" src="photo/cavaer.jpg"/>
        <section className="px-3 relative py-10 mb-10 bg-primary">
          <div className="justify-evenly items-center flex">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-2"># عن الشركة</h2>
              <p className="text-lg">
                شركة رائدة في ابتكار حلول التسويق لتمكين شركائها من التواصل مع العملاء وذلك من خلال تطوير إستراتيجيات التواصل وصناعة المحتوى وخدمات التصميم والتسويق، الإنتاج المرئي وإدارة شبكات التواصل الاجتماعي، والإعلانات بمختلف أنواعها.
              </p>
            </div>
            <img className="md:block  hidden w-1/4" src="photo/camera.svg" />
          </div>
          <div className="bg-white mt-5  w-full h-[0.05rem]"></div>
        </section>
        <h2 className=" text-center font-bold title">خــدمـاتنـــا</h2>
        <div className="bg-white/25 mt-1  w-full h-[0.05rem]"></div>
        <section className="p-3 bg-gradient-to-tr to-60% from-primary/20 to-second">
          <div className="grid gap-8 py-4 md:w-fit mx-auto">
            <CardServiec src="photo/h5.jpg" text="التسويق الالكتروني" />
            <CardServiec src="photo/h4.jpg" text="توثيق الفيديو" />
          </div>
        </section>
        <section className="my-12 p-4">
          <h2 className="title font-bold md:text-center bg-gradient-to-l  text-transparent bg-clip-text from-primary to-emerald-700">قصتنا و نجاحنا</h2>
          <p className="md:text-center md:max-w-2xl mx-auto md:text-xl">

            نصنع أخيلة الكلم،
            نُعبّر بالحرف والصوت والصورة،
            ننسج حكايات نجاح، نحن وشركاؤنا أبطالها
            نبتكر من الخيال آفاقاً لا حدود لها،
            نرسم خطوط البداية،
            نوجه التيار،
            ونبحر بأعمالنا كيفما أردنا لنصل بها بر الأمان.
            في الخيال ومع صانعيه تبدأ الرواية..
          </p>
        </section>
        <section>
          <h2 className=" text-center font-bold title">من اعمالنا</h2>
          <div className="bg-white/25 mt-1 w-full h-[0.05rem]"></div>
          <Gallery />
        </section>
        <section className="bg-gradient-to-b pt-8 to-second to-30% f from-primary/25 ">
          <h2 className=" text-center  font-bold title">كن جزء من<br /><span className="bg-gradient-to-l   text-transparent bg-clip-text from-primary to-emerald-700">عملائنا المميزين</span></h2>
          <LogoCollection />
        </section>
        <section className=" my-16 p-3">
          <h2 className=" text-center font-bold title">انجـزاتنــا</h2>
          <div className="bg-white/25 mt-1  w-full h-[0.05rem]"></div>
          <div className="grid grid-cols-2 my-5 md:grid-cols-4 lg:grid-cols-6 lg:w-4/5 mx-auto gap-3">
            <CardNumber title="ادارة الحسابات" number={300} src="photo/n1.svg" />
            <CardNumber title="مؤثر" number={600} src="photo/n2.svg" />
            <CardNumber title="حملة إعلانية" number={250} src="photo/n3.svg" />
            <CardNumber title="إنتاج مرئي" number={900} src="photo/n4.svg" />
            <CardNumber title="تقارير" number={850} src="photo/n5.svg" />
            <CardNumber title="تغطية" number={250} src="photo/n6.svg" />            
          </div>
        </section>
        <section className="my-10">
          <div className="">
            <div className="relative font-bold mb-4 flex items-center  ">
            <h2 className="title px-3 py-7 bg-second/25 w-full">ما يميزونا عن غيرنا</h2>
            <img className="absolute grayscale object-bottom   object-cover -z-10 w-full h-full top-0" src="photo/bg2.jpg"/>
            </div>
            <div className="grid gap-5 p-3 md:grid-cols-2 md:w-4/5 mx-auto ">
              <Card title="إتقان العمل
" descrption="نوظف الطاقات مع فرق عمل مؤهلة ومتخصصة لنحقق نتائج متقنة بكل متعة واحترافية." />
              <Card title="السرعة" descrption="الوقت ليس بعائق أبداً عن تحقيق مستويات تليق بنا وبعملائنا لنسطع سوياًً بدون حدود" />
            </div>
          </div>
        </section>
        <div className="w-full h-[50svh]">

        </div>
      </main>
 
    </>

  )
}

export default App
