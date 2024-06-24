import React, { Component } from 'react'

//rce
export class NewsItem extends Component {
  render() {


    let {title ,description , imageUrl ,newsUrl, author , date , source} = this.props;
    return (

        <>
        <div className="container">
       
<div className="card mt-5 mx-1 " >
  <img className="card-img-top" src={!imageUrl?"https://www.usatoday.com/gcdn/authoring/authoring-images/2023/12/28/USAT/72049949007-gty-1858023851.jpg?crop=2997,1686,x0,y301&width=2997&height=1686&format=pjpg&auto=webp":imageUrl} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{title}  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {source}
    <span class="visually-hidden">unread messages</span>
  </span></h5>
    <p className="card-text">{description}</p>
    <a target="_blank" href={newsUrl} className="btn btn-sm btn-primary">Read more...</a>

    <p className="card-text"><small className="text-muted">by {author? author: author="Developer Jaimin Mevada"} on {new Date(date).toGMTString()} </small></p>
  </div>



</div>
</div>

       </>
       
      
    )
  }
}

export default NewsItem