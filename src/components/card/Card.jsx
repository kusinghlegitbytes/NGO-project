import { LuLink } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import "./card.css"
import useCurrentURL from "../../hooks/useCurrentURL";
const Card = ({ngo}) => {
  const url=useCurrentURL()
  let iconSize=0
  let fontSize=""
  let descPaddingRight=""
  let orgIconBGSize="h-6"
  let orgIconBGRadius="rounded-xl"
  // if(url==="/"){
    iconSize=15
    fontSize="text-xs"    
    descPaddingRight=""
  // }else if(url==="/search-results"){
  //   iconSize=16
  //   fontSize="text-base"  
    descPaddingRight="pr-6"
  //   orgIconBGSize="h-8"
  //   orgIconBGRadius="rounded-2xl"
  // }
  return <div className="card-shadow rounded-lg p-2">
    <div className='flex flex-row gap-2'>
        <div className={`bg-white ${orgIconBGSize} ${orgIconBGRadius} mt-2`} style={{
          maxWidth:"20px"
        }}>
            <img src='/assets/imgs/org_icon_1.png' style={{
          maxWidth:"20px"
        }}/>
        </div>
        <div>
          <h2 className="text-sm font-semibold">{ngo.name}</h2>
          <span className="text-xs font-normal">{ngo.address}</span>
          <p className={`text-xs ${descPaddingRight}`}>{ngo.description}</p>
        </div>
    </div>
    <div className={`grid w-full sm:w-full gap-y-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 pt-4 ${fontSize}`}>
        <div className="flex px-1 sm:px-1 flex-row justify-around lg:justify-between sm:justify-around md:justify-between items-center gap-1"><LuLink size={iconSize} className="text-orange-600"/><a className="font-light" href="mailto:example@example.com">example@example.com</a></div>
        <div className="flex pr-3 md:pl-1 pl-7 flex-row justify-around lg:justify-between sm:justify-around md:justify-between items-center gap-1"><LuPhone size={iconSize} className="text-orange-600"/><a href="tel:+1234567890">tel:+1234567890</a></div>
    </div>
  </div>
}

export default Card
