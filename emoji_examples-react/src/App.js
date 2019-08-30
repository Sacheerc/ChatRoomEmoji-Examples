import React, { Component } from "react";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';
import "./App.css";


class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      message: '' ,
      messageArr:[],
      showEmojiPicker: false,
    };
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  };

  toggleEmojiPicker = () => {
    this.setState({
      showEmojiPicker: !this.state.showEmojiPicker,
    });
  }

  addEmoji=(emoji)=> {
    console.log(emoji)
    const text = `${this.state.message}${emoji.native}`;
    this.setState({
      message: text,
      showEmojiPicker: false,
    });
  }

  setMessage= () => {
    this.state.messageArr.push(this.state.message);
    this.setState({message:""})
  }

  render() {
    return (
      <div className="App">
        <div className="container p-5 align-items-center">
          <h2 className="text-center">Emoji-Mart example component</h2>
          <div className="container  m-5 border rounded m-5 p-4">
            {this.state.messageArr.map(message => {
              return <p>{message}</p>
            })}
            <div className="row mt-4 ">
              <div className="col-md-10 input-group">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.message}
                  name="newMessage"
                  placeholder="Type your message and hit ENTER to send"
                  onChange={this.handleChange}
                />
                
                <button type="button" className="toggle-emoji" onClick={this.toggleEmojiPicker}/>
                <button type="button" className="send-message ml-3" onClick={this.setMessage}/>
                
              </div>
              {this.state.showEmojiPicker ? (
                  <Picker set="apple" onSelect={this.addEmoji} className="emoji-mart"/>
                ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
