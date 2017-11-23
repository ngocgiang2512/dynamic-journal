import { connect } from 'react-redux'
import { updatePageSettings } from '../actions'
import Conversations from './Conversations';

const mapStateToProps = (state) => ({
  pageSettings: state.pageSettings
})

const mapDispatchToProps = {
  updatePageSettings: updatePageSettings
}

const ConversationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations)

export default ConversationsContainer
