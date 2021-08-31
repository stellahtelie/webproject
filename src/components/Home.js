import {Link} from "react-router-dom";
import React from 'react'
import"./Home.css"
const Home = () => {
    return (
        <div className="home">
            <div className="content">
            <p className="About">This is a story about a young man who went to space and allegedly met with <span className="highlight">aliens</span>.According to him, it took him 30 years to travel from earth to space
            </p>
            <button className="click"><Link to="/login">Readmore</Link></button>
            </div>
            <div className="image">
            <img src="./image/levi.png" alt="img" className="picture"/>
            </div>
        </div>
    )
}

export default Home

