import Search from "../../UI/Search"
import { LuLink } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
const Results = () => {
  return (
    <div className='app-background'>
      <div className='home'>
        <Search/>
        <div className='organization-container'>
            <div className='organization-card'>
                <div className='organization-card-main'>
                    <div className='organization-card-icon'>
                        <img src='/assets/imgs/org1.png'/>
                    </div>
                    <div className='organization-card-text'>
                        <div className='organization-title'>
                            Organization Name
                        </div>
                        <div className='organization-address'>
                            Address
                        </div>                        
                        <div className='organization-description'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sed numquam quo sit vel veritatis, iusto dolorum praesentium repellat, incidunt nesciunt voluptate debitis sint eius distinctio. At, impedit dolorum. Aspernatur?
                        </div>                                                
                    </div>
                </div>
                <div className='organization-card-footer'>
                    <div><LuLink/><a href="mailto:test@gmail.com">test@gmail.com</a></div>                    
                    <div><LuPhone/><a href="tel:+91 9999999999">+91 9999999999</a></div>                    
                </div>
            </div>
            <div className='organization-card'>
                <div className='organization-card-main'>
                    <div className='organization-card-icon'>
                        <img src='/assets/imgs/org2.png'/>
                    </div>
                    <div className='organization-card-text'>
                        <div className='organization-title'>
                            Organization Name
                        </div>
                        <div className='organization-address'>
                            Address
                        </div>                        
                        <div className='organization-description'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sed numquam quo sit vel veritatis, iusto dolorum praesentium repellat, incidunt nesciunt voluptate debitis sint eius distinctio. At, impedit dolorum. Aspernatur?
                        </div>                                                
                    </div>
                </div>
                <div className='organization-card-footer'>
                    <div><LuLink/><a href="mailto:test@gmail.com">test@gmail.com</a></div>                    
                    <div><LuPhone/><a href="tel:+91 9999999999">+91 9999999999</a></div>                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Results
