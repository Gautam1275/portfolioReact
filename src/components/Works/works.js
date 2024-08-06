import React from 'react'
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.jpeg';
import portfolio4 from '../../assets/portfolio-4.jpeg';
import portfolio5 from '../../assets/portfolio-5.jpeg';
import portfolio6 from '../../assets/portfolio-6.jpeg';
const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className='workDesc'>Content</span>
            <div className="worksImages">
                <a href='https://notemakerreact.netlify.app' target='#'><img src={portfolio1} alt="" className="worksImg" /></a>
                <a href='https://gautamportfolioproject.netlify.app' target='#'><img src={portfolio2} alt="" className="worksImg" /></a>
                <a href='https://tributepagesav.netlify.app' target='#'><img src={portfolio3} alt="" className="worksImg" /></a>
                <a href='https://csscityskylineresizescreen.netlify.app' target='#'><img src={portfolio4} alt="" className="worksImg" /></a>
                <a href='https://cacljs.netlify.app' target='#'><img src={portfolio5} alt="" className="worksImg" /></a>
                <a href='https://palindromecheker.netlify.app' target='#'><img src={portfolio6} alt="" className="worksImg" /></a>
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
}

export default Works;