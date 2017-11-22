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
import Collection from './Cards/Collection'
import CollectionDetail  from './Cards/CollectionDetail'
import ConnectionRequest from './Cards/ConnectionRequest'
import Content from './Cards/Content'

import moment from 'moment'
import { cardsParser, scrollIt } from '../utils'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  }
})

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>
const nearbyIcon = <IconLocationOn />

export class DynamicJournal extends React.Component {
  handleResizeWindow = () => {
    let bodyWidth = document.body.clientWidth
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

  closeLeftNav() {
    this.props.updatePageSettings({showLeftNav: false})
  }

  select(index) {
    this.props.updatePageSettings({selectedTabIndex: index})
  }

  getTimeInfo(item, index) {
    let cardHour = item.hour
    let cardDate = item.cardDate
    let cardTime = ''

    if (cardDate.format('L') !== moment().format('L')) {
      cardTime = cardDate.format('dddd')
    } else {
      if (cardHour < 12) {
        cardTime = 'This morning'
      } else if (cardHour < 17) {
        cardTime = 'This afternoon'
      } else if (cardHour < 20) {
        cardTime = 'This evening'
      } else {
        cardTime = 'Before Bed'
      }
    }

    return (
      <div id={index} key={index} className={item.status + " time-info"}>
        <p className="date">{cardDate.format('dddd Do MMMM')}</p>
        <p className="day">{cardTime}</p>
      </div>
    )
  }

  getCard(card, index) {
    if (card.type === "connection-request") {
      return <ConnectionRequest order={index} key={index} {...card} {...this.props} />
    } else if (card.type === "content") {
      return <Content order={index} key={index} {...card} {...this.props} />
    } else if (card.type === "collection") {
      return <Collection order={index} key={index} {...card} {...this.props} />
    } else {
      return null
    }
  }

  getJournal(cards) {
    let newItems = cardsParser(cards)
    return newItems.map((item, index) => {
      if (item.hasOwnProperty('cardDate')) {
        return this.getTimeInfo(item, index)
      } else {
        return this.getCard(item, index)
      }
    })
  }

  getCardDetail(cards) {
    return cards.map((card, index) => {
      if (card.type === 'collection') {
        return <CollectionDetail key={index} {...card} {...this.props} />
      } else {
        return null
      }
    })
  }

  closeProfileMenu() {
    this.props.updatePageSettings({showProfileMenu: false})
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
    console.log(this.props)

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={showLeftNav && fullCardId === null ? "app-wrapper showLeftNav" : "app-wrapper"}>

          <TopNavigation title="Dynamic Journal" {...this.props} />
          <LeftNavigation {...this.props} />
          <ProfileMenu {...this.props} />

          <div className="app-inner dynamic-journal">
            {this.getJournal(this.props.cards)}
            {this.getCardDetail(this.props.cards)}
          </div>

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

export default DynamicJournal
