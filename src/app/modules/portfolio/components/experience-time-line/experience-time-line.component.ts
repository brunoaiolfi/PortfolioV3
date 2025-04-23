import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-time-line',
  standalone: true,
  imports: [],
  templateUrl: './experience-time-line.component.html'  
})
export class ExperienceTimeLineComponent {

  public experiences = [
    {
      office: 'Desenvolvedor Mobile',
      company: 'Useall',
      companyLink: 'https://www.useall.com.br/',
      date: 'Fevereiro 2023 - Hoje',
      description: 'Desenvolvedor mobile na Useall, com foco em React Native e .NET MAUI. Especialista em refatoração de aplicações legadas, com ênfase em otimização de desempenho e melhoria contínua. Responsável pela definição de padrões de projeto, garantindo consistência, escalabilidade e boas práticas no desenvolvimento mobile.',
      tools: 'Android Studio, Kotlin, Java, React Native, Expo, .NET MAUI'
    },
    {
      office: 'Desenvolvedor Front end & Mobile',
      company: 'AGPR5',
      companyLink: 'https://www.agpr5.com/',
      date: 'Janeiro 2022 - Fevereiro 2023',
      description: 'Pioneiro no desenvolvimento mobile na AGPR5, atuando com React e React Native. Responsável por todo o ciclo de desenvolvimento, desde a criação de protótipos no Figma até a implementação do código e o deploy das aplicações. Conduzi a estruturação inicial da área mobile, definindo tecnologias, processos e boas práticas para o time.',
      tools: 'React e React Native'
    },
    {
      office: '[Estagio] Desenvolvedor Front end & Mobile',
      company: 'AGPR5',
      companyLink: 'https://www.agpr5.com/',
      date: 'Novembro 2021 - Dezembro 2021',
      description: '',
      tools: 'React e React Native'
    },
  ];

}
