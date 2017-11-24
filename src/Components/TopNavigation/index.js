import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

export class TopNavigation extends React.Component {
  handleClickNavIcon() {
    this.props.updatePageSettings({showLeftNav: !this.props.pageSettings.showLeftNav})
    this.props.updatePageSettings({showConversationsMenu: false})
  }

  handleClickMoreIcon() {
    let showProfileMenu = this.props.pageSettings.showProfileMenu
    this.props.updatePageSettings({showProfileMenu: !showProfileMenu})
  }

  render() {
    let { showLeftNav } = this.props.pageSettings
    let pathname = this.props.location.pathname
    
    let pageTitle = ''
    if (pathname === '/') {
      pageTitle = 'Dynamic Journal'
    } else if (pathname === '/conversations') {
      pageTitle = 'Conversations'
    }

    return (
      <div className="topNav clearfix"> 
        <IconButton className="navIcon" onClick={this.handleClickNavIcon.bind(this)}>
          <FontIcon className="material-icons">
            {showLeftNav ? "close" : "menu"}
          </FontIcon>
        </IconButton>

        <h1>{pageTitle}</h1>

        <div className="moreIcon">
          <IconButton className="iconButton" onClick={this.handleClickMoreIcon.bind(this)}>
            <FontIcon className="material-icons">
              more_vert
            </FontIcon>
          </IconButton>
        </div>
      </div>
    )
  }
}

export default TopNavigation
