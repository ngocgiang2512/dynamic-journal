import { combineReducers } from 'redux'
import { UPDATE_PAGE_SETTINGS, UPDATE_CARD } from '../actions'
import data from '../data'
import update from 'immutability-helper'

let initialPageSettings = {
  fullCardId: null,
  selectedTabIndex: 0,
  showLeftNav: false,
  cardProcessedId: null,
  firstActiveCardProcessed: false,
  showProfileMenu: false,
  showConversationsMenu: false,
  activeCurrentTab: true,
  activeConsId: 1
}

const pageSettings = (state = initialPageSettings, action) => {
  switch (action.type) {
    case UPDATE_PAGE_SETTINGS:
      let payload = action.payload
      if (!payload.hasOwnProperty('cardProcessedId')) {
        payload['cardProcessedId'] = null
      }
      return Object.assign({}, state, payload)
    default:
      return state
  }
}

let initialCardsSettings = data

const cardsSettings = (state = initialCardsSettings, action) => {
  switch (action.type) {
    case UPDATE_CARD:
      let cardId = action.payload.id
      // Find the index of the card in state list
      let cardIndex = state.findIndex((card) => 
        card.id === cardId
      )

      // update state
      let updatedCard = Object.assign({}, state[cardIndex], action.payload)
      let newState = update(state, {
        $splice: [
          [cardIndex, 1, updatedCard]
        ]
      })
      return newState
    default:
      return state
  }
}

const dynamicJournalSettings = combineReducers({
  pageSettings,
  cardsSettings
})

export default dynamicJournalSettings
