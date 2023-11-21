import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SuggestionsBox = ({filteredResults}) => {
    const navigate=useNavigate()
    const handleShowResults=(id)=>{
        navigate(`/results/${id}`)
    }
  return <div className='search-suggestions'>
    {filteredResults.map(result=><div key={result.id} className='suggestion-item' onClick={()=>handleShowResults(result.id)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <g clipPath="url(#clip0_63_324)">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.5 4.50001C8.77609 4.50001 7.12279 5.18483 5.90381 6.40382C4.68482 7.6228 4 9.2761 4 11C4 12.7239 4.68482 14.3772 5.90381 15.5962C7.12279 16.8152 8.77609 17.5 10.5 17.5C12.2239 17.5 13.8772 16.8152 15.0962 15.5962C16.3152 14.3772 17 12.7239 17 11C17 9.2761 16.3152 7.6228 15.0962 6.40382C13.8772 5.18483 12.2239 4.50001 10.5 4.50001ZM2 11C2.00012 9.6446 2.32436 8.30887 2.94569 7.10427C3.56702 5.89966 4.46742 4.8611 5.57175 4.07525C6.67609 3.28939 7.95235 2.77902 9.29404 2.58672C10.6357 2.39442 12.004 2.52576 13.2846 2.96979C14.5652 3.41382 15.7211 4.15766 16.6557 5.13925C17.5904 6.12084 18.2768 7.31171 18.6576 8.61252C19.0384 9.91333 19.1026 11.2864 18.8449 12.617C18.5872 13.9477 18.015 15.1975 17.176 16.262L20.828 19.914C21.0102 20.1026 21.111 20.3552 21.1087 20.6174C21.1064 20.8796 21.0012 21.1304 20.8158 21.3158C20.6304 21.5012 20.3796 21.6064 20.1174 21.6087C19.8552 21.611 19.6026 21.5102 19.414 21.328L15.762 17.676C14.5086 18.664 13.0024 19.2792 11.4157 19.4511C9.82905 19.623 8.22602 19.3448 6.79009 18.6482C5.35417 17.9517 4.14336 16.8649 3.29623 15.5123C2.44911 14.1597 1.99989 12.596 2 11ZM9.5 7.50001C9.5 7.23479 9.60536 6.98044 9.79289 6.7929C9.98043 6.60537 10.2348 6.50001 10.5 6.50001C11.6935 6.50001 12.8381 6.97412 13.682 7.81803C14.5259 8.66194 15 9.80654 15 11C15 11.2652 14.8946 11.5196 14.7071 11.7071C14.5196 11.8947 14.2652 12 14 12C13.7348 12 13.4804 11.8947 13.2929 11.7071C13.1054 11.5196 13 11.2652 13 11C13 10.337 12.7366 9.70108 12.2678 9.23224C11.7989 8.7634 11.163 8.50001 10.5 8.50001C10.2348 8.50001 9.98043 8.39465 9.79289 8.20712C9.60536 8.01958 9.5 7.76523 9.5 7.50001Z" fill="#656565"/>
        </g>
        <defs>
            <clipPath id="clip0_63_324">
            <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
        </defs>
    </svg>
    <div>{result.title.substring(0, 20)}</div>
  </div>)}
</div>
}

export default SuggestionsBox
