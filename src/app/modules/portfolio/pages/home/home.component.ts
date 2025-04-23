import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { ExperienceTimeLineComponent } from '../../components/experience-time-line/experience-time-line.component';
import { SplashIconsComponent } from '../../components/splash-icons/splash-icons.component';

//Components

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, HeaderComponent, CardProjectComponent, ExperienceTimeLineComponent, SplashIconsComponent
  ],
  templateUrl: './home.component.html',  
})
export class HomeComponent {

  public projects = [
    {
      name: 'E2 COD RT',
      thumbnail: '/assets/img/CodRT.png',
      demoLink: 'https://www.useall.com.br/eletrico/distribuidoras',
    },
    {
      name: 'Loja - Entregas',
      thumbnail: '/assets/img/Entregas.png',
      demoLink: 'https://play.google.com/store/apps/details?id=com.entrega_mobile&hl=pt_BR',
    },
    {
      name: 'Loja - Vendas',
      thumbnail: '/assets/img/Loja.png',
      demoLink: 'https://play.google.com/store/apps/details?id=com.useall.applojavendas&hl=pt_BR',
    },
    {
      name: 'Useall Serviços',
      thumbnail: '/assets/img/Os.png',
      demoLink: 'https://play.google.com/store/apps/details?id=br.com.useall.useallappservicos&hl=pt_BR',
    },{
      name: 'Useall',
      thumbnail: '/assets/img/Useall.png',
      demoLink: 'https://play.google.com/store/apps/details?id=br.com.useall.useappv4&hl=pt_BR',
    },
  ];

  public splashIcons = [
    {      
      path: "/assets/svg/icon-figma.svg",
      position: "absolute top-[10%] left-[10%]"
    },
    {      
      path: "/assets/svg/icon-angular.svg",
      position: "absolute top-[10%] left-[20%]"
    },
    {      
      path: "/assets/svg/icon-rxjs.svg",
      position: "absolute top-[10%] left-[30%]"
    },
    {      
      path: "/assets/svg/icon-tailwind.svg",
      position: "absolute top-[10%] left-[40%]"
    },
    {
      path: "/assets/svg/icon-typescript.svg",
      position: "absolute top-[10%] left-[50%]"
    },
    {      
      path: "/assets/svg/icon-google.svg",
      position: "absolute top-[10%] left-[60%]"
    },
  ]
}
