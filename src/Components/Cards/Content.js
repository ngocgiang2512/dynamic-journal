import React from 'react'
import IconActions from '../IconActions'

export class Content extends React.Component {

  render() {
    let card = this.props
  
    return (
      <div id={this.props.order} className={card.status + " card-outer"}>
        <div className="card-inner">
          <div className="cc-block">
            <div className="card-header">
              <p className="category">{card.category}</p>
              <p className="title">{card.title}</p>
            </div>
            <div className="video-wrapper">
              <embed src={card.content.videoUrl}/>
            </div>
            <p className="card-text">{card.content.paragraph}</p>
          </div>
          <IconActions
            moreDisabled={false}
            order={this.props.order}
            id={card.id}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}

export default Content