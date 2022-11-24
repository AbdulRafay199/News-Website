import React, { Component } from 'react'
import './Mymarque.css'

export class Mymarque extends Component {
  render() {
    let {newsline} = this.props

   
    return (
    <div className='container-fluid d-flex align-items-center flex-row my-2' style={{backgroundColor:"#0A1650", padding:"5px", color:"white"}}>        
        <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2 mt-1 d-flex flex-row justify-content-center">
                <h5 className='text-center mt-1' style={{textAlign:"center", fontSize:"12px"}}>Breaking News</h5>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-10 d-flex justify-content-center">
                <marquee style={{backgroundColor:"#DB5A6E", padding:"5px", color:"white"}} className="text-center">{newsline}</marquee>     
            </div>
        </div>    
    </div>
    )
  }
}

export default Mymarque
