import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  iconButton: {
    padding: 0,
    margin: '0 5px',
    width: 'auto',
    height: 'auto'
  }
};

export class IconActions extends React.Component {
  updateCard(id, order, status, isFirstActiveCard) {
    this.props.updateCard({id, status})
    this.props.updatePageSettings({cardProcessedId: order, firstActiveCardProcessed: isFirstActiveCard})
  }

  render() {
    let isFirstActiveCard = this.props.isFirstActiveCard ? true : false
    
    return (
      <div className="icon-actions">
        <IconMenu
          menuItemStyle={{color: '#8d8d8d'}}
          iconButtonElement={
            <IconButton style={styles.iconButton}>
              <FontIcon className="material-icons">
                snooze
              </FontIcon>
            </IconButton>
          }
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
        >
          <MenuItem primaryText="1 hour" onClick={this.updateCard.bind(this, this.props.id, this.props.order, 'snoozed', isFirstActiveCard)} />
          <MenuItem primaryText="8 hour" onClick={this.updateCard.bind(this, this.props.id, this.props.order, 'snoozed', isFirstActiveCard)} />
          <MenuItem primaryText="1 day" onClick={this.updateCard.bind(this, this.props.id, this.props.order, 'snoozed', isFirstActiveCard)} />
        </IconMenu>

        <IconButton style={styles.iconButton} onClick={this.updateCard.bind(this, this.props.id, this.props.order, 'declined', isFirstActiveCard) }>
          <FontIcon className="material-icons">
            highlight_off
          </FontIcon>
        </IconButton>

        <IconButton style={styles.iconButton} onClick={this.updateCard.bind(this, this.props.id, this.props.order, 'completed', isFirstActiveCard)}>
          <FontIcon className="material-icons">
            check_circle
          </FontIcon>
        </IconButton>

        {
          this.props.moreDisabled 
            ?
              <IconButton style={styles.iconButton} disabled={true}>
                <FontIcon className="material-icons disable">
                  more_vert
                </FontIcon>
              </IconButton> 
            :
              <IconMenu
                menuItemStyle={{color: '#8d8d8d'}}
                iconButtonElement={
                  <IconButton style={styles.iconButton}>
                    <FontIcon className="material-icons">
                      more_vert
                    </FontIcon>
                  </IconButton>
                }
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
              >
                <MenuItem primaryText="Item 1" />
                <MenuItem primaryText="Item 2" />
                <MenuItem primaryText="Item 3" />
              </IconMenu>
        }
      </div>
    )
  }
}

export default IconActions
