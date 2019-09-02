import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmojiMartComponent } from './components/emoji-mart/emoji-mart.component';
import { ReplaceEmojisPipe } from './pipes/emoji.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmojiMartComponent,
    ReplaceEmojisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
