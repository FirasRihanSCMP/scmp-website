import React from 'react'
import { Link } from 'react-router-dom'
import "./notfound.css"
export default function NotFound() {
   /*  useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input]) */
    return (
        <div className="mainNotFound">
            <h3 className="notfound">Sorry! <br/> Your request is not valid!</h3>
            <p className="notfound"> Navigate To <Link className="LinkHome" to="/">Home?</Link></p>
    
        </div>
    )
}
