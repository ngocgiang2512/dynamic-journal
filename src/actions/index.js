export const UPDATE_PAGE_SETTINGS = 'UPDATE_PAGE_SETTINGS'
export const UPDATE_CARD = 'UPDATE_CARD'

export function updatePageSettings(payload) {
  return {
    type: 'UPDATE_PAGE_SETTINGS',
    payload
  }
}

export function updateCard(payload) {
  return {
    type: 'UPDATE_CARD',
    payload
  }
}
