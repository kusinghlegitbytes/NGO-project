import { LuLink } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import "./card.css"
import useCurrentURL from "../../hooks/useCurrentURL";
const Card = () => {
  const url=useCurrentURL()
  let iconSize=0
  let fontClass=""
  let descPaddingRight=""
  let orgIconBGSize="h-6"
  let orgIconBGRadius="rounded-xl"
  if(url==="/"){
    iconSize=15
    fontClass="text-xs"    
    descPaddingRight=""
  }else if(url==="/search-results"){
    iconSize=16
    fontClass="text-base"  
    descPaddingRight="pr-6"
    orgIconBGSize="h-8"
    orgIconBGRadius="rounded-2xl"
  }
  return <div className="card-shadow rounded-lg p-2">
    <div className='flex flex-row gap-2'>
        <div className={`bg-white ${orgIconBGSize} ${orgIconBGRadius} mt-2`}>
            <img src='/assets/imgs/org_icon_1.png'/>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Organization Name</h2>
          <span className="text-xs font-normal">Address</span>
          <p className={`text-xs ${descPaddingRight}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem adipisci suscipit maxime a atque quas quidem culpa exercitationem? Facere veritatis optio sapiente, laborum est cumque harum. Soluta, maiores id?</p>
        </div>
    </div>
    <div className={`flex flex-row justify-between pt-4 ${fontClass}`}>
        <div className="flex flex-row justify-between items-center gap-1"><LuLink size={iconSize} className="text-orange-600"/><a className="font-light" href="mailto:example@example.com">example@example.com</a></div>
        <div className="flex flex-row justify-between items-center gap-1"><LuPhone size={iconSize} className="text-orange-600"/><a href="tel:+1234567890">tel:+1234567890</a></div>
    </div>
  </div>
}

export default Card
