import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles= [
    {
    "source": {
    "id": "talksport",
    "name": "TalkSport"
    },
    "author": "Cameron Temple",
    "title": "‘It hits you like a ton of bricks’ – England’s most successful ever white-ball cricket captain, Eoin Morgan...",
    "description": "",
    "url": "https://talksport.com/sport/cricket/1139123/england-white-ball-cricket-captain-eoin-morgan-retirement/",
    "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2019/04/GettyImages-1132545421.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
    "publishedAt": "2022-06-29T11:49:39Z",
    "content": "Prior to England’s recent ODI (One Day International) series with the Netherlands, Eoin Morgan had his mind set on leading his men into the T20 World Cup later this year.\r\nThen it suddenly hit him th… [+6127 chars]"
    },
    {
    "source": {
    "id": "bbc-sport",
    "name": "BBC Sport"
    },
    "author": "BBC Sport",
    "title": "Shane Warne memorial - watch & follow updates",
    "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
    "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
    "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
    "publishedAt": "2022-03-30T08:22:26.498888Z",
    "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
    },
    {
    "source": {
    "id": "espn-cric-info",
    "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    "publishedAt": "2020-04-27T11:41:47Z",
    "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
    "source": {
    "id": "espn-cric-info",
    "name": "ESPN Cric Info"
    },
    "author": null,
    "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    "publishedAt": "2020-03-30T15:26:05Z",
    "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
    ]
    
  constructor(){
    super();
    console.log("Hello i am a constructor from news component");
    this.state = {
      article: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title ="myTitle1" description="mydesc1" imageUrl="https://talksport.com/wp-content/uploads/sites/5/2019/04/GettyImages-1132545421.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" newsUrl=""/>
          </div>
          <div className="col-md-4">
            <NewsItem title ="myTitle2" description="mydesc2"/>
          </div>
          <div className="col-md-4">
            <NewsItem title ="myTitle3" description="mydesc3"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News
