import React from 'react';
import { blue500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {markdown} from 'markdown';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  }
});

export class Content extends React.Component {
  render() {
    console.log(markdown.toHTML( "Hello *World*!" ));
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app-wrapper">
          <div className="app-inner bb-content">
            <div className="cc-block content">
              <div className="block-title">
                <h2>Welcome to Running program</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum tempus ex, eget dignissim risus sollicitudin vitae. Suspendisse eget dolor et elit convallis eleifend in non quam. Sed feugiat dapibus sagittis. Praesent mattis tempus gravida.</p>
            </div>

            <div className="cc-block">
              <div className="audio-wrapper">
                
              </div>
            </div>

            <div className="cc-block">
              <div className="video-wrapper">
                <embed src="https://www.youtube.com/embed/hS5CfP8n_js"/>
              </div>
            </div>

            <div className="cc-block">
              <div className="video-wrapper">
                <embed src="https://player.vimeo.com/video/15368982"/>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Content