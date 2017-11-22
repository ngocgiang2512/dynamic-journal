import React from 'react'

export class Collection extends React.Component {
  handleToggleCard(id, isFullScreen) {
    let fullCardId = this.props.pageSettings.fullCardId
    if (fullCardId === id) {
      this.props.updatePageSettings({fullCardId: null})
    } else {
      this.props.updatePageSettings({fullCardId: id})
    }
    this.props.updateCard({id, isFullScreen: !isFullScreen})
  }

  render() {
    let card = this.props
    let isFullScreen = card.isFullScreen
    
    return (
      <div id={this.props.order} key={this.props.index} className="card-outer">
        <div className="card-inner">
          <div className="cc-block bg-img" onClick={this.handleToggleCard.bind(this, card.id, isFullScreen)}>
            <img alt="" src={card.content.imageUrl} />
            <div className="abs-content">
              <div className="card-header abs dark">
                <p className="category">{card.category}</p>
                <p className="title">{card.title}</p>
              </div>
              <p className="text-bottom">Fitness at home for those who always find excuses.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Collection