import { connect } from 'react-redux'
import { updatePageSettings, updateCard } from '../actions'
import DynamicJournal from './DynamicJournal';

const mapStateToProps = (state) => ({
  pageSettings: state.pageSettings,
  cards: state.cardsSettings
})

const mapDispatchToProps = {
  updatePageSettings: updatePageSettings,
  updateCard: updateCard
}

const DynamicJournalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicJournal)

export default DynamicJournalContainer
