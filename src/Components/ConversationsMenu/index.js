import React from 'react'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import { conversations } from '../../data'

export class ConversationsMenu extends React.Component {
  closeConversationsMenu() {
    this.props.updatePageSettings({showConversationsMenu: false})
  }

  updateActiveTab(tab) {
    if (tab === 'current') {
      this.props.updatePageSettings({activeCurrentTab: true})
    } else {
      this.props.updatePageSettings({activeCurrentTab: false})
    }
  }

  getConversationsList() {
    let { activeCurrentTab } = this.props
    let lists = activeCurrentTab ? conversations.current : conversations.archived

    return lists.map((item, index) => 
      <li key={index}>
        <span className="avatar"></span>
        <span>{item}</span>
      </li>
    )
  }

  render() {
    let { showConversationsMenu, activeCurrentTab } = this.props
    return (
      <div className={showConversationsMenu ? "conversationsMenu show" : "conversationsMenu"}>
        <header className="subTopNav clearfix"> 
          <IconButton className="backIcon" onClick={this.closeConversationsMenu.bind(this)}>
            <FontIcon className="material-icons">keyboard_arrow_left</FontIcon>
          </IconButton>
          <h2>Conversations</h2>
        </header>
        <div className="tabTitle clearfix">
          <h3 className={activeCurrentTab ? "active" : null} onClick={this.updateActiveTab.bind(this, 'current')}>Current</h3>
          <h3 className={activeCurrentTab ? null : "active"} onClick={this.updateActiveTab.bind(this, 'archived')}>Archived</h3>
        </div>
        <div className="conversationsList">
          <div className="block">
            <ul className="links">
              {this.getConversationsList()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ConversationsMenu