import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Project {
  img: string;
  name: string;
  info: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  // LOGICA PARA REDIRIGIR AL PROYECTO QUE SE HACE CLICK
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      img: '',
      name: 'Grob-Post',
      info: 'Web para horarios grupales e individuales y posts',
      link: 'https://google.com',
    },
    {
      img: '',
      name: 'Grob-Post',
      info: '...',
      link: 'https://google.com',
    },
    {
      img: '',
      name: 'Grob-Post',
      info: '...',
      link: 'https://google.com',
    },
  ]

  openProject(project: Project){
    this.selectedProject = project
    window.open(project.link, '_blank');
  }

  getProjects() {
    return this.projects;
  }
}
