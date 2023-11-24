import { useLocation } from "react-router-dom"
const useCurrentURL=()=>{
    const location=useLocation()
    return location.pathname
}
export default useCurrentURL