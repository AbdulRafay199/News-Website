import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import Newsarea from './Components/Newsarea';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TopNavbar from './Components/TopNavbar';


export default class App extends Component {

  state = {
    progress: 0,
    country: "us"
  }
  render() {
    let changeprogress = (progressload)=>{
      this.setState({
        progress: progressload
      })
    }

    
    let selectoption = ()=>{
      let select = document.getElementById("inputGroupSelect01");
      if(select.options[select.selectedIndex].value === "0"){
        this.setState({
          country: "us"
        })
        // console.log(this.state.country)
      }
      else if(select.options[select.selectedIndex].value === "1"){
        this.setState({
          country: "in"
        })
        // console.log(this.state.country)
      }
      else if(select.options[select.selectedIndex].value === "2"){
        this.setState({
          country: "au"
        })
        // console.log(this.state.country)
      }
      else if(select.options[select.selectedIndex].value === "3"){
        this.setState({
          country: "nz"
        })
        // console.log(this.state.country)
      }
      else if(select.options[select.selectedIndex].value === "4"){
        this.setState({
          country: "fr"
        })
        // console.log(this.state.country)
      }
      else if(select.options[select.selectedIndex].value === "5"){
        this.setState({
          country: "jp"
        })
        // console.log(this.state.country)
      }
      else if(select.options[select.selectedIndex].value === "6"){
        this.setState({
          country: "ru"
        })
        // console.log(this.state.country)
      }
      else if(select.options[select.selectedIndex].value === "7"){
        this.setState({
          country: "sa"
        })
        // console.log(this.state.country)
      }
      else if(select.options[select.selectedIndex].value === "8"){
        this.setState({
          country: "ae"
        })
        // console.log(this.state.country)
      }
      else if(select.options[select.selectedIndex].value === "9"){
        this.setState({
          country: "ca"
        })
        // console.log(this.state.country)
      }
    }

    return (
      <>
      <Router>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {/* <div className="col-sm-12 d-lg-block col-lg-3 col-md-12">
              
          </div> */}
          <TopNavbar selectoption={selectoption}/>   
          <div className="col-sm-12 col-lg-12 col-md-12 d-flex flex-column">
              <LoadingBar
                color='#f11946'
                height={3}
                progress={this.state.progress}
              />
              <Navbar/>
          <Routes>
              <Route path="/" element={<Newsarea country={this.state.country} myprogress={changeprogress} key="general" category="general"/>}/>
              <Route path="/sports" element={<Newsarea country={this.state.country} myprogress={changeprogress} key="sports" category="sports"/>}/>
              <Route path="/politics" element={<Newsarea country={this.state.country} myprogress={changeprogress} key="politics" category="politics"/>}/>
              <Route path="/health" element={<Newsarea country={this.state.country} myprogress={changeprogress} key="health" category="health"/>}/>
              <Route path="/technology" element={<Newsarea country={this.state.country} myprogress={changeprogress} key="technology" category="technology"/>}/>
              <Route path="/science" element={<Newsarea country={this.state.country} myprogress={changeprogress} key="science" category="science"/>}/>
              <Route path="/entertainment" element={<Newsarea country={this.state.country} myprogress={changeprogress} key="entertainment" category="entertainment"/>}/>
          </Routes>              
          </div>
        </div>
      </div>
      </Router>
      </>
    )
  }
}


