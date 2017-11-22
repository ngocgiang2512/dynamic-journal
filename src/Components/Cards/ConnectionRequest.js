import React from 'react'
import FlatButton from 'material-ui/FlatButton'

export class ConnectionRequest extends React.Component {
  render() {
  	let card = this.props
    
    return (
      <div id={this.props.order} className="card-outer">
        <div className="card-inner">
          <div className="cc-block collection">
            <div className="card-header dark">
              <p className="category">{card.category}</p>
              <p className="title">{card.title}</p>
            </div>
            <div className="coach-wrapper clearfix">
              <div className="coach-image">
                <img alt="" src={card.coach.avatarUrl} />
              </div>
              <div className="coach-info">
                <p className="coach-name">{card.coach.name}</p>
                <p className="coach-type">{card.coach.type}</p>
              </div>
            </div>
          </div>
          <div className="card-actions">
            <FlatButton label="Decline" className="grey" />
            <FlatButton label="Profile" />
            <FlatButton label="Accept" className="purple" />
          </div>
        </div>
      </div>
    )
  }
}

export default ConnectionRequest