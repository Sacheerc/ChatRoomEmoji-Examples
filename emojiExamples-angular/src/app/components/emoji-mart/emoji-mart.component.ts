import { Component, OnInit } from '@angular/core';
import {ReplaceEmojisPipe} from './../../pipes/emoji.pipe';
import { saveAs } from 'file-saver/src/FileSaver'


@Component({
  selector: 'app-emoji-mart',
  templateUrl: './emoji-mart.component.html',
  styleUrls: ['./emoji-mart.component.css']
})
export class EmojiMartComponent implements OnInit {
  showEmojiPicker = false;
  message="";
  messageArr=[];
  sheet = 'apple';
  size = 22;
  sheetSize = 64;
  data=[
    {
      name:null,
      age:null,
    },

  ]
  
  get backgroundImageFn(): (set: string, sheetSize: number) => string {
    return (set: string, sheetSize: number) =>
      `https://unpkg.com/emoji-datasource-${this.sheet}@4.0.4/img/${this.sheet}/sheets-256/${sheetSize}.png`;
  }
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

      downloadFile() {
        const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
        const header = Object.keys(this.data[0]);
        let csv = this.data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
        csv.unshift(header.join(','));
        let csvArray = csv.join('\r\n');
    
        var a = document.createElement('a');
        var blob = new Blob([csvArray], {type: 'text/csv' }),
        url = window.URL.createObjectURL(blob);
    
        a.href = url;
        a.download = "myFile.csv";
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    }


}
