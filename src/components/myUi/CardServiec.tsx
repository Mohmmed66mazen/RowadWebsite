

interface ICardServiec{
    src :string,
    text  :string
}


const CardServiec =({src,text}:ICardServiec)=>{
    return(
        <div className="relative w-full md:aspect-[4/1] aspect-[3/2] md:w-[80vw]  cursor-pointer scale-95 hover:scale-100 transition-all">
            <img className="  top-0 right-0 md:aspect-[4/1] aspect-[3/2] absolute  object-cover rounded-lg" src={src}/>
            <p className="absolute bg-primary/50 backdrop-blur-sm px-3 rounded-sm bottom-4 font-medium text-2xl right-3">{text}</p>
        </div>
    )
}
export default CardServiec