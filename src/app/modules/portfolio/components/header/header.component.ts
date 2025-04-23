
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInCopy } from '../../../../animations';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  animations: [
    fadeInCopy
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {  
  public animationState: string = "out";  

  constructor() { }


  copyEmail() {        
    navigator.clipboard.writeText("bruno.aiolfi154@gmail.com")
      .then(() => {                
        this.animationState = ":enter"
        setTimeout(() => {
          this.animationState = "out"
          
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text to clipboard:", error);
      });
  }
}