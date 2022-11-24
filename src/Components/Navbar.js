import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export class Navbar extends Component {

  render() {
    // let menuclose = ()=>{
    //   let menu = document.getElementById("multiCollapseExample1");
    //   menu.style.display = "none";
    //   menu.style.visibility = "hidden";
    //   // document.getElementsById("closebtn").display = "none";
    // }
    return (
    <>
        <div className="container-fluid d-flex flex-column menu" id="multiCollapseExample1" style={{backgroundColor:"rgb(237,234,222,0.8)", borderRight:"2px solid #0A1650", height:"100vh", position:"fixed",zIndex:"9999", marginLeft:"-12px"}}>
          {/* <button type="button" className="btn-close btncl" id='closebtn' onClick={menuclose}></button> */}
          <img src="NewsNutLogo.png" alt="" className="img-fluid mx-auto" style={{width:"200px", height:"auto"}}/>
          <Link type="button" className="btn btn-outline-dark hoverr" to='/'><img className="img-fluid mx-2" src="https://img.icons8.com/color-glass/48/000000/magazine.png" style={{width:"24px"}} alt="category icon"/>General</Link>
          <Link type="button" className="btn btn-outline-dark hoverr" to='/sports'><img className="img-fluid mx-2" src="https://img.icons8.com/color/48/000000/basketball.png" style={{width:"24px"}} alt="category icon"/>Sports</Link>
          <Link type="button" className="btn btn-outline-dark hoverr" to='/politics'><img className="img-fluid mx-2" src="https://img.icons8.com/color/48/000000/diplomacy.png" style={{width:"24px"}} alt="category icon"/>Politics</Link>
          <Link type="button" className="btn btn-outline-dark hoverr" to='/health'><img className="img-fluid mx-2" src="https://img.icons8.com/color/48/000000/heart-health.png" style={{width:"24px"}} alt="category icon"/>Health</Link>
          <Link type="button" className="btn btn-outline-dark hoverr" to='/technology'><img className="img-fluid mx-2" src="https://img.icons8.com/color/48/000000/artificial-intelligence.png" style={{width:"24px"}} alt="category icon"/>Technology</Link>
          <Link type="button" className="btn btn-outline-dark hoverr" to='/science'><img className="img-fluid mx-2" src="https://img.icons8.com/color/48/000000/bot.png" style={{width:"24px"}} alt="category icon"/>Science</Link>
          <Link type="button" className="btn btn-outline-dark hoverr" to='/entertainment'><img className="img-fluid mx-2" src="https://img.icons8.com/color/48/000000/theatre-mask.png" style={{width:"24px"}} alt="category icon"/>Entertainment</Link>
        </div>
        
        
        {/* business
        entertainment
        general
        health
        science
        sports
        technology */}
       
    </>
    )
  }
}

export default Navbar
