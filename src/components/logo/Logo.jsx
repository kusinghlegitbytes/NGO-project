import { useState } from "react"
import "./logo.css"
const Logo = () => {
  const [moveLogo, setMoveLogo]=useState(false)
  const handleAnimateLogo=()=>{
    setMoveLogo(true)
  }
  return <div className={`py-10`} onClick={handleAnimateLogo}>
    <img src="/assets/imgs/logo.png" className={`w-96 h-56 mx-auto ${moveLogo?'animate-logo':''}`}/>
  </div>
}
export default Logo