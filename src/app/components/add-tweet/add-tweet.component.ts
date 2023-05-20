import { Component } from '@angular/core';
import { tweet } from 'src/app/types/tweet.types';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent {
  tweetobj: tweet = { descripcion: "", usuario: "" };
  maxCaracter: number = 100;

  publicar(): void {
    this.inicializar();
  }

  inicializar(): void {
    this.tweetobj = {
      descripcion: "",
      usuario: ""
    }
  }
}
