import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import ConversationsMenu from '../ConversationsMenu'
import { NavLink } from 'react-router-dom'

export class LeftNavigation extends React.Component {
  closeLeftNav() {
    this.props.updatePageSettings({showLeftNav: false})
  }

  handleMouseOver() {
    document.body.classList.add('no-scroll')
  }

  handleMouseLeave() {
    document.body.classList.remove('no-scroll')
  }

  handleClickOnConversations() {
    let { showConversationsMenu } = this.props.pageSettings
    this.props.updatePageSettings({showConversationsMenu: !showConversationsMenu})
  }

  render() {
    let { showConversationsMenu } = this.props.pageSettings

    return (
      <div 
        className="leftNav"
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}>
        <main>
          <header className="clearfix" onClick={this.closeLeftNav.bind(this)}>
            <IconButton className="closeIcon">
              <FontIcon className="material-icons">
                clear
              </FontIcon>
            </IconButton>
            <h2>Title</h2>
          </header>
          <div className="leftNavContent">
            <div className="block">
              <ul className="links">
                <li>
                  <FontIcon className="material-icons">home</FontIcon>
                  <span>Dynamic Journal</span>
                </li>
                <li>
                  <FontIcon className="material-icons">snooze</FontIcon>
                  <span>Snoozed</span>
                </li>
                <li>
                  <FontIcon className="material-icons">timeline</FontIcon>
                  <span>Timeline</span>
                </li>
              </ul>
            </div>
            <div className="block">
              <ul className="links">
                <li className={showConversationsMenu ? "active" : null} onClick={this.handleClickOnConversations.bind(this)}>
                  <FontIcon className="material-icons">perm_phone_msg</FontIcon>
                  <span>Conversations</span>
                </li>
                <li>
                  <FontIcon className="material-icons">business</FontIcon>
                  <span>Vision Area Name</span>
                </li>
                <li>
                  <FontIcon className="material-icons">date_range</FontIcon>
                  <span>Calendar</span>
                </li>
              </ul>
            </div>
            <div className="block">
              <h3>Connections</h3>
              <ul className="links">
                <li>
                  <span className="avatar"></span>
                  <span>Penny Smith</span>
                </li>
                <li>
                  <span className="avatar"></span>
                  <span>Mark Foster</span>
                </li>
                <li>
                  <span className="avatar"></span>
                  <span>David Wright</span>
                </li>
                <li>
                  <span className="avatar"></span>
                  <span>Mary Ellis</span>
                </li>
                <li>
                  <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
                  <span>Show all</span>
                </li>
              </ul>
            </div>
            <div className="block">
              <h3>Library</h3>
              <ul className="links">
                <li>
                  <FontIcon className="material-icons">history</FontIcon>
                  <span>History</span>
                </li>
                <li>
                  <span className="avatar"></span>
                  <span>Leadership Excellence</span>
                </li>
                <li>
                  <span className="avatar"></span>
                  <span>Coaching Mastery</span>
                </li>
                <li>
                  <span className="avatar"></span>
                  <span>Health & Nutrition</span>
                </li>
                <li>
                  <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
                  <span>Show more</span>
                </li>
              </ul>
            </div>
            <div className="block">
              <h3>Programs</h3>
              <ul className="links">
                <li>
                  <span className="avatar"></span>
                  <span>Leadership Excellence</span>
                </li>
                <li>
                  <span className="avatar"></span>
                  <span>Coaching Mastery</span>
                </li>
                <li>
                  <FontIcon className="material-icons">keyboard_arrow_down</FontIcon>
                  <span>Show more</span>
                </li>
              </ul>
            </div>
            <div className="block">
              <ul className="links">
                <li>
                  <FontIcon className="material-icons">settings</FontIcon>
                  <span>Settings</span>
                </li>
                <li>
                  <FontIcon className="material-icons">help</FontIcon>
                  <span>Help</span>
                </li>
                <li>
                  <FontIcon className="material-icons">feedback</FontIcon>
                  <span>Send feedback</span>
                </li>
              </ul>
            </div>
            <div className="block">
              <div className="guide-links">
                <span>about</span>
                <span>terms</span>
                <span>privacy</span>
                <span>policy</span>
                <span>copyright</span>
              </div>
            </div>
            <div className="copyright">
              <p>&copy; 2017 Coaching Cloud</p>
            </div>
          </div>
        </main>

        <ConversationsMenu updatePageSettings={this.props.updatePageSettings} {...this.props.pageSettings}/>
      </div>
    )
  }
}

export default LeftNavigation