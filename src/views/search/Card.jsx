import { LuLink } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import "../../components/card/card.css"
const Card = ({ngo}) => {
  let iconSize=0
  let fontSize=""
  let descPaddingRight=""
  let orgIconBGSize="h-6"
  let orgIconBGRadius="rounded-xl"
    iconSize=15
    fontSize="text-xs"    
    descPaddingRight="pr-6"
  return <div className="card-shadow rounded-lg p-2">
    <div className='flex flex-row gap-2'>
        <div className={`bg-white ${orgIconBGSize} ${orgIconBGRadius} mt-2 max-w-full`}>
            <img src='/assets/imgs/org_icon_1.png'/>
        </div>
        <div>
          <h2 className="text-sm font-semibold">{ngo.name}</h2>
          <span className="text-xs font-normal">Address</span>
          <p className={`text-xs ${descPaddingRight}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem adipisci suscipit maxime a atque quas quidem culpa exercitationem? Facere veritatis optio sapiente, laborum est cumque harum. Soluta, maiores id?</p>
        </div>
    </div>
    <div className={`grid w-full sm:w-full gap-y-1 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-4 ${fontSize}`}>
        <div className="flex px-3 sm:px-3 flex-row justify-between lg:justify-between sm:justify-between md:justify-between items-center gap-1"><LuLink size={iconSize} className="text-orange-600"/><a className="font-light" href="mailto:example@example.com">example@example.com</a></div>
        <div className="flex px-3 md:pl-1 lg:px-4 flex-row justify-between lg:justify-between sm:justify-between md:justify-between items-center gap-1"><LuPhone size={iconSize} className="text-orange-600"/><a href="tel:+1234567890">tel:+1234567890</a></div>
    </div>
  </div>
}

export default Card
