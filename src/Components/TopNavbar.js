import React, { Component } from 'react'

export default class TopNavbar extends Component {

    
    
    render() {
        
        let togglemenu = ()=>{
            let navbar = document.getElementById("multiCollapseExample1");
            if(navbar.style.display === "none"){
                navbar.style.display = "block";
                navbar.style.visibility = "visible";
                // navbar.style.width = "25%"
            }
            else{
                navbar.style.display = "none";
                navbar.style.visibility = "hidden";
                // navbar.style.width = "25%"
            }
        }

        let {selectoption} = this.props

    return (
      <>
      <nav className="navbar sticky-top navbar-dark" style={{backgroundColor:'rgb(10,22,80,0.9)'}}>
        <div className="container-fluid">
            <button className="btn togglebtn px-2" onClick={togglemenu} data-bs-toggle="collapse" aria-expanded="false" aria-controls="multiCollapseExample1"><img className='' src="https://img.icons8.com/fluency/96/000000/menu--v1.png" alt="menu" style={{width:"30px", height:"auto"}}/></button>
            <div className="mx-auto">
                <img src="NewsNutLogo.png" className="img-fluid" alt="navbar" style={{width:"96px", height:"auto"}}/>
                <a className="navbar-brand" href="/">NewsNutssss</a>
            </div>
            <div className="input-group my-auto" style={{width:"20%"}}>
                <label className="mx-2 my-auto" htmlFor="inputGroupSelect01" style={{color:"white"}}>Country: </label>
                <select className="form-select form-select-sm" onChange={selectoption} id="inputGroupSelect01" style={{backgroundColor:'rgb(10,22,80)', color:"white"}}>
                    <option defaultValue="0" value="0">United States</option>
                    <option value="1">India</option>
                    <option value="2">Australia</option>
                    <option value="3">New Zealand</option>
                    <option value="4">France</option>
                    <option value="5">Japan</option>
                    <option value="6">Russia</option>
                    <option value="7">Saudia Arabia</option>
                    <option value="8">UAE</option>
                    <option value="9">Canada</option>
                </select>
            </div>
        </div>
      </nav>
      
      
      </>
    )
  }
}
