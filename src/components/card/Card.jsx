import { LuLink } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
const Card = () => {
  return <div className="custom-shadow rounded-lg p-2">
    <div className='flex flex-row gap-2'>
        <div className='bg-white h-6 rounded-xl mt-2'>
            <img src='/assets/imgs/org_icon_1.png'/>
        </div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem adipisci suscipit maxime a atque quas quidem culpa exercitationem? Facere veritatis optio sapiente, laborum est cumque harum. Soluta, maiores id?
        </div>
    </div>
    <div className="flex flex-row justify-between text-xs">
        <div className="flex flex-row justify-between items-center gap-1"><LuLink className="text-orange-600"/><a href="mailto:example@example.com">example@example.com</a></div>
        <div className="flex flex-row justify-between items-center gap-1"><LuPhone className="text-orange-600"/><a href="tel:+1234567890">tel:+1234567890</a></div>
    </div>
  </div>
}

export default Card
