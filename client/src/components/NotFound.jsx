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
            <h1 className="notfound">Sorry! <br/> We couldn't find that page.</h1>
            <p className="notfound"> Go To <Link className="LinkHome" to="/">Home?</Link></p>
        <div className="divb">.</div>
        </div>
    )
}
