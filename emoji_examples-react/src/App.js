import React, { Component } from "react";
import "./App.css";

import {
  // [..]
  addEmoji,
  toggleEmojiPicker,
} from './methods';
import 'emoji-mart/css/emoji-mart.css';

class App extends Component {
  constructor() {
    super();
    this.addEmoji = addEmoji.bind(this);
    this.toggleEmojiPicker = toggleEmojiPicker.bind(this);
    this.state = {
      showEmojiPicker: false
    };
  }

  render() {
    const {
      showEmojiPicker,
    } = this.state;
    return (
      <div className="App">
        <div class="container p-5 align-items-center">
          <h2 class="text-center">Emoji-Mart example component</h2>
          <div class="container  m-5 border rounded m-5 p-4">
            <div class="row mt-4 ">
              <div class="col-md-10 input-group">
                <input class="form-control"></input>
                <button type="button" class="toggle-emoji"></button>
                <button type="button" class="send-message ml-3"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
