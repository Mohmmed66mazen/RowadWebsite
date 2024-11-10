interface ICard{
    title:string,
    number:number,
    src:string
}

const CardNumber = (card:ICard)=>{
return(
    <div className="bg-gradient-to-br   from-zinc-800 to-zinc-900 p-3 flex rounded gap-3 flex-col">
        <div className="flex text-2xl gap-2 items-center">
        <img className="w-10" src={card.src}/>
        {
            //@ts-ignore
            <p className="font-mono font-bold"><span className="counter" start="0" end={card.number.toString()} time="0.5" >0</span><span>+</span></p>
        }
           
        </div>
        <p>{card.title}</p>
    </div>
)
}

export default CardNumber