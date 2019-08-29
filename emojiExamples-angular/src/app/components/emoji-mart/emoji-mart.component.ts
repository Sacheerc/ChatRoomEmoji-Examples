import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji-mart',
  templateUrl: './emoji-mart.component.html',
  styleUrls: ['./emoji-mart.component.css']
})
export class EmojiMartComponent implements OnInit {
  showEmojiPicker = false;
  constructor() { }

  ngOnInit() {
  }

  toggleEmojiPicker() {
     this.showEmojiPicker = !this.showEmojiPicker;
  }

}
