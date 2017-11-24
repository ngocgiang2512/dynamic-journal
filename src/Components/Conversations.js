import React from 'react'
import { conversations } from '../data'

export class Conversations extends React.Component {
  render() {
    console.log(this.props)

    let { showLeftNav, showConversationsMenu, activeCurrentTab, activeConsId } = this.props.pageSettings
    let className = null;
    let list = activeCurrentTab ? conversations.current : conversations.archived
    let activeItem = list[0].id
    
    list.map(item => {
      if (item.id === activeConsId) {
        activeItem = item
        return null
      }
      return null
    })

    if (showLeftNav) {
      if (showConversationsMenu) {
        className = "narrow"
      } else {
        className = "middle"
      }
    }

    return (
      <div className={"app-inner conversations " + className}>
        <p>{activeItem.content}</p>
      </div>
    )
  }
}

export default Conversations
