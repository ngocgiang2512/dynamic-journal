import React from 'react'
import Collection from './Cards/Collection'
import CollectionDetail  from './Cards/CollectionDetail'
import ConnectionRequest from './Cards/ConnectionRequest'
import Content from './Cards/Content'

import moment from 'moment'
import { cardsParser } from '../utils'

export class DynamicJournal extends React.Component {
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

  render() {
    console.log(this.props)

    return (
      <div className="app-inner dynamic-journal">
        {this.getJournal(this.props.cards)}
        {this.getCardDetail(this.props.cards)}
      </div>
    )
  }
}

export default DynamicJournal
