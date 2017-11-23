import React from 'react'
import {blue500} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import FontIcon from 'material-ui/FontIcon'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'

import TopNavigation from './TopNavigation'
import LeftNavigation from './LeftNavigation'
import ProfileMenu from './ProfileMenu'
import { conversations } from '../data'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  }
})

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>
const nearbyIcon = <IconLocationOn />

export class Conversations extends React.Component {
  handleResizeWindow = () => {
    let bodyWidth = document.body.clientWidth
    if (bodyWidth < 768) {
      document.body.classList.remove('showLeftNav')
      this.props.updatePageSettings({showLeftNav: false})
      this.props.updatePageSettings({showConversationsMenu: false})
    } else {
      document.body.classList.add('showLeftNav')
      this.props.updatePageSettings({showLeftNav: true})
    }
  }

  componentWillMount() {
    this.handleResizeWindow()
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResizeWindow)
    this.props.updatePageSettings({showLeftNav: true})
    this.props.updatePageSettings({showConversationsMenu: true})
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeWindow)
  }

  componentDidUpdate() {
    let { showLeftNav } = this.props.pageSettings
    if (showLeftNav) {
      document.body.classList.add('showLeftNav')
    } else {
      document.body.classList.remove('showLeftNav')
    }
  }

  closeLeftNav() {
    this.props.updatePageSettings({showLeftNav: false})
  }

  select(index) {
    this.props.updatePageSettings({selectedTabIndex: index})
  }

  closeProfileMenu() {
    this.props.updatePageSettings({showProfileMenu: false})
  }

  getOverlay() {
    let { showProfileMenu } = this.props.pageSettings

    if (showProfileMenu) {
      return (
        <div className="overlay transparent" onClick={this.closeProfileMenu.bind(this)}></div>
      )
    } else {
      return (
        <div className="overlay" onClick={this.closeLeftNav.bind(this)}></div>
      )
    }
  }

  getConversationsContent() {
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

  render() {
    let { selectedTabIndex, showLeftNav } = this.props.pageSettings
    console.log(this.props)

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={showLeftNav ? "app-wrapper showLeftNav" : "app-wrapper"}>

          <TopNavigation title="Dynamic Journal" {...this.props} />
          <LeftNavigation {...this.props} />
          <ProfileMenu {...this.props} />

          {this.getConversationsContent()}

          <div className="bottomNavWrapper">
            <BottomNavigation selectedIndex={selectedTabIndex}>
              <BottomNavigationItem
                label="Recents"
                icon={recentsIcon}
                onClick={() => this.select(0)}
              />
              <BottomNavigationItem
                label="Favorites"
                icon={favoritesIcon}
                onClick={() => this.select(1)}
              />
              <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onClick={() => this.select(2)}
              />
            </BottomNavigation>
          </div>

          {this.getOverlay()}
          
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Conversations
