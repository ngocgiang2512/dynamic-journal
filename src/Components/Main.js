import React from 'react'
import {blue500} from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import TopNavigation from './TopNavigation'
import ProfileMenu from './ProfileMenu'
import LeftNavigation from './LeftNavigation'

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'

import { scrollIt } from '../utils'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  }
})

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>
const nearbyIcon = <IconLocationOn />

export class Main extends React.Component {
  handleResizeWindow = () => {
    let bodyWidth = document.body.clientWidth
    if (bodyWidth < 768) {
      this.props.updatePageSettings({isSmallScreen: true})
    } else {
      this.props.updatePageSettings({isSmallScreen: false})
    }
    if (bodyWidth < 1024) {
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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeWindow)
  }

  componentDidUpdate() {
    let { fullCardId, firstActiveCardProcessed, showLeftNav } = this.props.pageSettings
    if (fullCardId !== null) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    if (showLeftNav) {
      document.body.classList.add('showLeftNav')
    } else {
      document.body.classList.remove('showLeftNav')
    }
    let cardProcessedId = this.props.pageSettings.cardProcessedId
    if (cardProcessedId !== null) {
      let element = document.getElementById(cardProcessedId)
      scrollIt(element, 300, 'easeOutQuad', firstActiveCardProcessed)
    }
  }

  closeProfileMenu() {
    this.props.updatePageSettings({showProfileMenu: false})
  }

  closeLeftNav() {
    this.props.updatePageSettings({showLeftNav: false})
  }

  select(index) {
    this.props.updatePageSettings({selectedTabIndex: index})
  }

  getOverlay() {
    let { fullCardId, showProfileMenu } = this.props.pageSettings

    if (fullCardId !== null) {
      return (
        <div className="overlay show" onClick={this.closeLeftNav.bind(this)}></div>
      )
    } else if (showProfileMenu) {
      return (
        <div className="overlay transparent" onClick={this.closeProfileMenu.bind(this)}></div>
      )
    } else {
      return (
        <div className="overlay" onClick={this.closeLeftNav.bind(this)}></div>
      )
    }
  }

  render() {
    let { selectedTabIndex, showLeftNav, fullCardId } = this.props.pageSettings

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={showLeftNav && fullCardId === null ? "app-wrapper showLeftNav" : "app-wrapper"}>
          <TopNavigation title="Conversations" {...this.props} />
          <ProfileMenu {...this.props} />
          <LeftNavigation {...this.props} />

          {this.props.children}

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

export default Main