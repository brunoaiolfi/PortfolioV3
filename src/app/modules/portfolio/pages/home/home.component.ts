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
      name: 'Loja - Vendas',
      thumbnail: '/assets/img/Loja.png',
      demoLink: 'https://play.google.com/store/apps/details?id=com.useall.applojavendas&hl=pt_BR',
      description: "Aplicativo de vendas para balcão de loja, reescrito a partir de uma versão legada extremamente lenta. A nova implementação reduziu em até 90% o tempo de resposta, resultando em aumento significativo da base de usuários. Está em produção há 2 anos sem registros de bugs reportados ao suporte."
    },
    {
      name: 'E2 COD RT',
      thumbnail: '/assets/img/CodRT.png',
      demoLink: 'https://www.useall.com.br/eletrico/distribuidoras',
      description: "O E2 COD RT é um aplicativo desenvolvido para técnicos de uma cooperativa energética acompanharem e registrarem seus encaminhamentos em campo, mesmo sem conexão com a internet. Construído com Clean Architecture e abordagem Offline First, garante robustez, organização do código e continuidade operacional em ambientes remotos."
    },
    {
      name: 'Loja - Entregas',
      thumbnail: '/assets/img/Entregas.png',
      demoLink: 'https://play.google.com/store/apps/details?id=com.entrega_mobile&hl=pt_BR',
      description: "Aplicativo voltado para motoristas de entrega, permitindo o controle de pedidos e consulta de rotas. Desenvolvido com abordagem offline-first, garantindo uso confiável mesmo sem conexão com a internet. Inicialmente escrito em React Native com Clean Architecture e posteriormente reescrito em MAUI para aprimoramento técnico e multiplataforma."
    },
    {
      name: 'Useall Serviços',
      thumbnail: '/assets/img/Os.png',
      demoLink: 'https://play.google.com/store/apps/details?id=br.com.useall.useallappservicos&hl=pt_BR',
      description: "Aplicativo voltado para prestadores de serviços, permitindo o preenchimento de ordens de serviço (OS) e consulta de rotas até os destinos. Desenvolvido com abordagem offline-first para garantir funcionalidade em campo sem internet. Um diferencial é a visualização das OS no mapa, semelhante aos PokéStops do Pokémon GO, oferecendo uma experiência mais interativa e intuitiva."
    },
    {
      name: 'Jardim Alerta',
      thumbnail: '/assets/img/JardimAlerta.png',
      demoLink: 'https://github.com/brunoaiolfi/Jardim-Alerta',
      description: "Aplicativo voltado para cuidados com plantas, permitindo que usuários recebam lembretes para regar suas espécies. Desenvolvido com Clean Architecture e abordagem totalmente offline, garantindo funcionamento sem depender de conexão com a internet. Criado com foco em prática e aprimoramento de habilidades em arquitetura limpa."
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
