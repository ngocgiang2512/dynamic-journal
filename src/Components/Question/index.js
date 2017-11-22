import React from 'react'
import { blue500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  }
});

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

export class Question extends React.Component {
  state = {
    singleLineAnswer: '',
    multiLineAnswer: '',
    checked: false,
    selectionAnswer: null,
    year: null,
    month: null,
    date: null,
    time: null,
    toggleAnswer: false,
    radioSelectionAnswer: 1,
    checkedSelectionAnswer1: false,
    checkedSelectionAnswer2: false,
    searchText: '',
    color: ''
  }

  updateSingleLineAnswer = (event, answer) => {
    this.setState({singleLineAnswer: answer});
  }

  updateMultiLineAnswer = (event, answer) => {
    this.setState({multiLineAnswer: answer});
  }

  updateSelectionAnswer = (event, index, value) => {
    this.setState({selectionAnswer: value});
  }

  updateToggleAnswer = (event, value) => {
    this.setState({toggleAnswer: !this.state.toggleAnswer});
  }

  updateDate = (event, date) => {
    this.setState({date: date});
  }

  updateTime = (event, time) => {
    this.setState({time: time});
  }

  updateRadioSelectionAnswer = (event, answer) => {
    this.setState({radioSelectionAnswer: answer})
  }

  updateCheckedSelectionAnswer1 = (event, answer) => {
    this.setState({checkedSelectionAnswer1: !this.state.checkedSelectionAnswer1})
  }

  updateCheckedSelectionAnswer2 = (event, answer) => {
    this.setState({checkedSelectionAnswer2: !this.state.checkedSelectionAnswer2})
  }

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText: searchText,
      color: searchText
    });
  }

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  }

  render() {
    console.log(this.state);
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app-wrapper">
          <div className="app-inner bb-question">
            <div className="cc-block">
              <p className="question">This is a single line answer question?</p>
              <TextField
                fullWidth
                hintText="Single line answer"
                onChange={this.updateSingleLineAnswer}
              />
            </div>

            <div className="cc-block">
              <p className="question">Send a question to dynamic journal and get the users input/answer.</p>
              <TextField
                fullWidth
                hintText="Multi line answer"
                multiLine={true}
                onChange={this.updateMultiLineAnswer}
              />
            </div>

            <div className="cc-block">
              <p className="question">This is a dropdown question?</p>
              <SelectField
                fullWidth
                hintText="Select"
                value={this.state.selectionAnswer}
                onChange={this.updateSelectionAnswer}
              >
                <MenuItem value={null} primaryText="" />
                <MenuItem value={1} primaryText="Option 1" />
                <MenuItem value={2} primaryText="Option 2" />
                <MenuItem value={3} primaryText="Option 3" />
              </SelectField>
            </div>

            <div className="cc-block">
              <p className="question">Choose the desired colour</p>
              <AutoComplete
                fullWidth
                hintText="Type desired color"
                searchText={this.state.searchText}
                onUpdateInput={this.handleUpdateInput}
                dataSource={colors}
                filter={AutoComplete.fuzzyFilter}
              />
            </div>

            <div className="cc-block">
              <p className="question">This is a toggle answer question?</p>
              <div className="mTop12">
                <Toggle
                  label="Simple"
                  className="mBottom10"
                  toggled={this.state.toggleAnswer}
                  onToggle={this.updateToggleAnswer}
                />
              </div>
            </div>

            <div className="cc-block">
              <p className="question">This is a date picker question?</p>
              <DatePicker 
                fullWidth 
                hintText="Select Date" 
                onChange={this.updateDate}
              />
            </div>

            <div className="cc-block">
              <p className="question">This is a time picker question?</p>
              <TimePicker
                fullWidth
                format="ampm"
                hintText="12hr Format"
                onChange={this.updateTime}
              />
            </div>

            <div className="cc-block">
              <p className="question">This is a multichoice question?</p>
              <RadioButtonGroup 
                name="radioGroup" 
                defaultSelected={this.state.radioSelectionAnswer}
                className="mTop12"
                onChange={this.updateRadioSelectionAnswer}
              >
                <RadioButton
                  value={1}
                  label="Option 1"
                  className="mBottom10"
                />
                <RadioButton
                  value={2}
                  label="Option 2"
                  className="mBottom10"
                />
                <RadioButton
                  value={3}
                  label="Option 3"
                  className="mBottom10"
                />
              </RadioButtonGroup>
            </div>

            <div className="cc-block">
              <p className="question">This is a check answer question?</p>
              <div className="mTop12">
                <Checkbox
                  label="Option 1"
                  className="mBottom10"
                  checked={this.state.checkedSelectionAnswer1}
                  onCheck={this.updateCheckedSelectionAnswer1.bind(this)}
                />
                <Checkbox
                  label="Option 2"
                  className="mBottom10"
                  checked={this.state.checkedSelectionAnswer2}
                  onCheck={this.updateCheckedSelectionAnswer2.bind(this)}
                />
              </div>
            </div>
            
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Question
