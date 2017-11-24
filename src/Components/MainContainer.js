import { connect } from 'react-redux'
import { updatePageSettings, updateCard } from '../actions'
import { withRouter } from 'react-router-dom'
import Main from './Main';

const mapStateToProps = (state) => ({
  pageSettings: state.pageSettings,
  cards: state.cardsSettings
})

const mapDispatchToProps = {
  updatePageSettings: updatePageSettings,
  updateCard: updateCard
}

const MainContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main))

export default MainContainer
