interface Icard{
    title:string,
    descrption: string
}



const Card = ({title,descrption}:Icard)=>{
    return(
        <div className=" p-4 rounded">
            <h3 className="font-bold text-2xl mb-1">{title}</h3>
            <p className="text-white/80">{descrption}</p>
        </div>
    )
}

export default Card