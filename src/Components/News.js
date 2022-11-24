import React, { Component } from 'react'

export class News extends Component {
  render() {

    let {title, disc, imgurl, newsurl,author,date,source} = this.props
    return (
        <>
        <div className="card" style={{width:"18rem"}}>
            <img src={imgurl} className="card-img-top" alt="..."/>
            <span className="position-absolute top-10 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"99"}}>
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{disc}...</p>
            <p className="card-text"><small className="text-muted">By {!author?'Anonymous':author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-outline-dark">Read More</a>
            </div>
        </div>
        </>
    )
  }
}

export default News
