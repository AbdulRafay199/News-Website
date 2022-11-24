import React, { Component } from 'react'
import News from './News'
import Mymarque from './Mymarque';
import './Newsarea.css'
import PropTypes from 'prop-types'


export class Newsarea extends Component {

  static defaultProps = {
     category:"general"
  }

  static propTypes = {
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state = {
      articles: []
    }       
  }   

  fetchdata = async ()=>{
    let {category, myprogress} = this.props
      myprogress(10)
      let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${category}&apiKey=b93c3bf42bfe455787828979263ce6b8`);
      myprogress(30)
      let jsondata = await data.json()
      myprogress(50)
      this.setState({
        articles: jsondata.articles,
      })
      myprogress(100)

  }
  
  
   async componentDidMount(){
        this.fetchdata();
    }

  async componentDidUpdate(prevProps){
    
    if(prevProps.country !== this.props.country){
        this.fetchdata();
      }


  }

  render(){  
    let newsline = "";
    
    this.state.articles.map((element) =>{
        return newsline = newsline + element.title + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"
    })
    
    return (
      
    <>
    <Mymarque newsline={newsline}/>
    <div className="container my-4">
        <h2 className="text-center my-4" style={{color:"#DB5A6E", fontWeight:"bold"}}>NewsNut - Top {this.props.category} Headlines</h2>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {this.state.articles.slice(4,5).map((img) => {
                return <>
                <div key={img.urlToImage}>
                <img src={img.urlToImage?img.urlToImage:"//www.roobinascake.com/assets/admin/images/no-preview-available.png"} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-md-block cc">
                   <h5>{img.title}</h5>
                   <p>{img.description}</p>
                </div>
                </div>
               </>                 
              })}
            </div>
            <div className="carousel-item">
              {this.state.articles.slice(1,2).map((img) => {
                 return <>
                 <div key={img.title}>
                    <img src={img.urlToImage?img.urlToImage:"//www.roobinascake.com/assets/admin/images/no-preview-available.png"} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h5>{img.title}</h5>
                        <p>{img.description}</p>
                    </div>
                 </div>
                </>
              })}
            </div>
            <div className="carousel-item">
              {this.state.articles.slice(2,3).map((img) => {
                 return <>
                 <div key={img.discription}>
                    <img src={img.urlToImage?img.urlToImage:"//www.roobinascake.com/assets/admin/images/no-preview-available.png"} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block">
                        <h5>{img.title}</h5>
                        <p>{img.description}</p>
                    </div>
                 </div>
                </>
              })}
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
        <div className="row my-5">
            {this.state.articles.map((newsitem) => {
                return <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-4 gy-3 d-flex justify-content-center" key={newsitem.url}> 
                        <News title={newsitem.title} disc={newsitem.description?newsitem.description.slice(0,80):""} imgurl={newsitem.urlToImage?newsitem.urlToImage:"//www.roobinascake.com/assets/admin/images/no-preview-available.png"} newsurl={newsitem.url} author={newsitem.author} date={newsitem.publishedAt} source={newsitem.source.name}/>
                    </div>
            })        
            }       
        </div>
    </div>
    </>
    )
  }
}

export default Newsarea
