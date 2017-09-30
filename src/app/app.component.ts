import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors: string[] = ["red", "blue", "green", "yellow"];
  name: string;
  color: string = "color";
  isDisabled: boolean = true;

  classes: string[] = ['bold', 'italic', 'highlight'];
  selectedClass: string[] = [];

  enabler(): void {
    this.isDisabled = !this.isDisabled;
    this.color = "black";
  }

  addClass(event: any) {
    this.selectedClass = [];
    var values = event.target.options;
    var opt: any;

    for (var i = 0; i < values.length; i++) {
      opt = values[i];
      if (opt.selected) {
        this.selectedClass.push(opt.text);
      }
    }
  }
}
