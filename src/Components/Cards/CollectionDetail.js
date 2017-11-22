import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

export class CollectionDetail extends React.Component {
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
    let fullCardId = this.props.pageSettings.fullCardId
    let card = this.props
    let isFullScreen = card.isFullScreen
    return (
      <div className={fullCardId === null ? "full-card-outer" : "full-card-outer show"}>
        <div className="full-card-inner">
          <div className="full-card">
            <IconButton className="close-detail" onClick={this.handleToggleCard.bind(this, card.id, isFullScreen)}>
              <FontIcon className="material-icons close">cancel</FontIcon>
            </IconButton>

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
            <div className="card-detail">
              <h3>Part One : The Basics of Fitness</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum tempus ex, eget dignissim risus sollicitudin vitae. Suspendisse eget dolor et elit convallis eleifend in non quam. Sed feugiat dapibus sagittis. Praesent mattis tempus gravida.</p>
              <h3>Set your goals</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum tempus ex, eget dignissim risus sollicitudin vitae. Suspendisse eget dolor et elit convallis eleifend in non quam. Sed feugiat dapibus sagittis. Praesent mattis tempus gravida.</p>
              <h3>Set your goals</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum tempus ex, eget dignissim risus sollicitudin vitae. Suspendisse eget dolor et elit convallis eleifend in non quam. Sed feugiat dapibus sagittis. Praesent mattis tempus gravida.</p>
              <div className="cc-block">
                <h3 className="question">What is your primary goal?</h3>
                <RadioButtonGroup 
                  name="radioGroup" 
                  className="mTop12"
                >
                  <RadioButton
                    value={1}
                    label="Overall Health & Wellness"
                    className="mBottom10"
                  />
                  <RadioButton
                    value={2}
                    label="Lose Weight"
                    className="mBottom10"
                  />
                  <RadioButton
                    value={3}
                    label="Build Muscle Mass"
                    className="mBottom10"
                  />
                  <RadioButton
                    value={4}
                    label="Tone Muscles"
                    className="mBottom10"
                  />
                  <RadioButton
                    value={5}
                    label="Sports Performance"
                    className="mBottom10"
                  />
                  <RadioButton
                    value={6}
                    label="Increace Flexibility"
                    className="mBottom10"
                  />
                  <RadioButton
                    value={7}
                    label="Injury Recovery"
                    className="mBottom10"
                  />
                </RadioButtonGroup>
              </div>
            </div>
            <div className="card-actions">
              <FlatButton label="Snooze" />
              <FlatButton label="Accept" className="purple" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CollectionDetail