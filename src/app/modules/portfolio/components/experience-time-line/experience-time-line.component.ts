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
      description: 'Desenvolvedor de aplicativos Android nativo e híbridos, utilizando React Native, Maui e Kotlin.',
      tools: 'Android Studio, Kotlin, Java, React Native, Expo, .NET MAUI'
    },
    {
      office: 'Desenvolvedor Front end & Mobile',
      company: 'AGPR5',
      companyLink: 'https://www.agpr5.com/',
      date: 'Janeiro 2022 - Fevereiro 2023',
      description: '',
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
