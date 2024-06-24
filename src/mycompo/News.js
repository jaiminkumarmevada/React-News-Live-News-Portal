import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';

//rce
export class News extends Component {

  static defaultProps = {
   country : 'in',
   pagesize : 5 ,
   category : 'general'
    
  };


  static propTypes = {
    
country : PropTypes.string,
pagesize : PropTypes.number,
category : PropTypes.string

  };


  constructor() {
    super();
    console.log("contsructor from the news");
    this.state = {
      articles: [], 
      loading: false,  //&category=${this.props.category}
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d693a0e7be3413fbbe3bee7e30929ee&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults : parsedData.totalResults});
  }

  handleNextClick = async () => {
    console.log("next");

if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)){

}
else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5d693a0e7be3413fbbe3bee7e30929ee&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });}
  };
  
  handlePreviousClick = async () => {
    console.log("pre");
    if (this.state.page > 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=5d693a0e7be3413fbbe3bee7e30929ee&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
    
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
      });
    }
  };
  


  render() {
    return (
      <> 
 
        <div className="container my-3">
          <h2>News JMN - Top Articles<h6>Developed by Jaimin Mevada</h6></h2>
        
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  content={element.content}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button" disabled={this.state.page<=1}
            className="btn btn-secondary"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)}
            className="btn btn-secondary"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
