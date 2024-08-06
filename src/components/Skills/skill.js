import React from 'react';
import './skill.css';
import UIDes from '../../assets/uidesign.jpg';
import webDes from '../../assets/websitedesign.jpg';
import appDes from '../../assets/app-design.jpg';

const Skill = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">Content paragraph sddsijbsfkbdsbfhsdasjsdiajhsjidnkjnssaijhsifasijvsvjisafhsihsdicsi dfgdfghdfgdfhdsfdgsdfgxcfzxgdsfzxvzxgdxfzxvxgzxd</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDes} alt="UIDes" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>UI/UX demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={webDes} alt="webDes" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Web Design demo text</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={appDes} alt="appDes" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>App Design demo text</p>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Skill