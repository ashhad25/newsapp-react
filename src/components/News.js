import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8bdc3d4c907f4872bb69f8371d15bcd2&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
  }
  
  prevPage = async() =>{
    console.log("Previous Page");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8bdc3d4c907f4872bb69f8371d15bcd2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }
  nextPage = async() =>{
    console.log("Next Page");
    if (!(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8bdc3d4c907f4872bb69f8371d15bcd2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">NewsApp - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-3" key={element.url}>
          <NewsItem title ={element.title.slice(0, 45)} description={element.description.slice(0, 95)} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevPage}>&#8249; Previous</button>
        <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.nextPage}>Next &#8250;</button>
        </div>
      </div>
    )
  }
}

export default News
