import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;  
    return (
    <div className="my-2">
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl?"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7J4SRBXUHMI6ZLAWR67XDFGNPA.jpg&w=1440":imageUrl} className="card-img-top" style={{height: '230px', width: '414px'}} alt='...'/>
          <div className="card-body">
            <h5 className="card-title">{title!=null ? title : ""}...</h5>
            <p className="card-text">{description!=null ? description : ""}...</p>
            <p className="card-text"><small className="text-muted"><b>By {!author?'Unknown':author} on {new Date(date).toGMTString()}</b></small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More &#8250;</a>
          </div>
      </div>
    </div>
    )
  }
}

export default NewsItem
