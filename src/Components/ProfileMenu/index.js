import React from 'react'
import FontIcon from 'material-ui/FontIcon'

export class ProfileMenu extends React.Component {
  render() {
    let {showProfileMenu} = this.props.pageSettings
    return (
      <div className={showProfileMenu ? "profileMenu show" : "profileMenu"}>
        <div className="header">
          <div className="avatar">
            <img alt="avatar" src="https://farm5.staticflickr.com/4524/26675317289_b36812e025_t.jpg" />
          </div>
          <div className="user-info">
            <p className="user-name">James Stokes</p>
            <p className="email">james@coachingcloud.com</p>
          </div>
        </div>
        <div>
          <div className="block">
            <ul className="links">
              <li>
                <FontIcon className="material-icons">person</FontIcon>
                <span>My profile</span>
              </li>
              <li>
                <FontIcon className="material-icons">group</FontIcon>
                <span>Manage community</span>
              </li>
              <li>
                <FontIcon className="material-icons">people_outline</FontIcon>
                <span>Switch community</span>
              </li>
              <li>
                <FontIcon className="material-icons">subdirectory_arrow_left</FontIcon>
                <span>Sign out</span>
              </li>
            </ul>
          </div>
          <div className="block">
            <ul className="links">
              <li>
                <FontIcon className="material-icons">settings</FontIcon>
                <span>Settings</span>
              </li>
              <li>
                <FontIcon className="material-icons">help</FontIcon>
                <span>Help</span>
              </li>
              <li>
                <FontIcon className="material-icons">feedback</FontIcon>
                <span>Send feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileMenu