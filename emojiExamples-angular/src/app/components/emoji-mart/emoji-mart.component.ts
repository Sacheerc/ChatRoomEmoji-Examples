import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-emoji-mart',
  templateUrl: './emoji-mart.component.html',
  styleUrls: ['./emoji-mart.component.css']
})
export class EmojiMartComponent implements OnInit {
  showEmojiPicker = false;
  message="";
  messageArr=[];
  constructor() { }

  ngOnInit() {
  }

  toggleEmojiPicker() {
     this.showEmojiPicker = !this.showEmojiPicker;
  }

  onSend(){
    this.messageArr.push(this.message);
    this.message="";
  }

  addEmoji(event) {
        const text = `${this.message}${event.emoji.native}`;
        this.message = text;
        this.showEmojiPicker = false;
      }

}
