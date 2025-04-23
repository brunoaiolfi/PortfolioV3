import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-splash-icons',
  standalone: true,
  imports: [],
  templateUrl: './splash-icons.component.html',
})
export class SplashIconsComponent{
  @Input() public splashIcons:any;
  
  // ngOnInit(){
  //   this.splashIcons = this.splashIcons.map((icon:any) => {
  //     icon.position = this.getRandomPosition();
  //     return icon;
  //   }
  //   );

  // }

  getRandomPosition(){
    let value = Math.floor(Math.random() * 100);    
    return value;
  }
}
