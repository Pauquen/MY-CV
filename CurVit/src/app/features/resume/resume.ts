import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Skill {
  name: string;
  level: string;
  description: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'DB' | 'IA';
}

export interface Cert {
  name: string,
  img: string,
  desc: string,
}

export interface Activity {
  name: string;
  img: string;
  desc: string;
  link: string;
}

@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume {

  // SKILLS - CARDS
  selectedSkill: Skill | null = null;

  skills: Skill[] = [
    // Frontend
    {
      name: 'Angular',
      level: 'Básico',
      description: 'Framework frontend basado en TypeScript. Componentes, servicios y routing.',
      icon: 'https://cdn.simpleicons.org/angular/DD0031',
      category: 'Frontend'
    },
    {
      name: 'HTML',
      level: 'Intermedio',
      description: 'Estructura semántica, accesibilidad y SEO.',
      icon: 'https://cdn.simpleicons.org/html5/E34F26',
      category: 'Frontend'
    },
    {
      name: 'CSS',
      level: 'Intermedio',
      description: 'Layouts responsivos, Flexbox, Grid y animaciones.',
      icon: 'https://cdn.simpleicons.org/css/1572B6',
      category: 'Frontend'
    },

    // Backend
    {
      name: 'Java',
      level: 'Intermedio',
      description: 'POO, estructuras de datos y lógica backend.',
      icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
      category: 'Backend'
    },
    {
      name: 'Python',
      level: 'Basico',
      description: 'Fundamentos de tipado y logica basica.',
      icon: 'https://cdn.simpleicons.org/python/3776AB',
      category: 'Backend'
    },
    {
      name: 'Django',
      level: 'Basico',
      description: 'Estructuras de datos y manejo de modelos para extraer datos.',
      icon: 'https://cdn.simpleicons.org/django/092E20',
      category: 'Backend'
    },
    {
      name: 'NodeJS',
      level: 'Basico',
      description: 'Manejo de NodeJS para desarrollo Frontend basico.',
      icon: 'https://cdn.simpleicons.org/nodedotjs/339933',
      category: 'Backend'
    },

    // Base de Datos
    {
      name: 'PostgreSQL',
      level: 'Basico - Intermedio',
      description: 'Consultas basicas con ayuda de Django e implementacion con supabase.',
      icon: 'https://cdn.simpleicons.org/postgresql/4169E1',
      category: 'DB'
    },


    // IA
    {
      name: 'PySpark',
      level: 'Aprendiendo',
      description: 'Practicando con volumenes de datos altos con premisas de seleccion y filtro.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg',
      category: 'IA'
    },
  ];

  openSkill(skill: Skill) {
    this.selectedSkill = skill;
  }

  closeModal() {
    this.selectedSkill = null;
  }

  getSkillsByCategory(category: Skill['category']) {
    return this.skills.filter(s => s.category === category);
  }

  // CERTS - CARDS
  selectedCert: Cert | null=null;

  certs: Cert [] = [
    {
      name: 'Certificado FRONTEND',
      img: '',
      desc: 'Certificado obtenido tras x horas en el curso brindado por la universidad..',
    },
    {
      name: 'Certificado BACKEND',
      img: '',
      desc: 'Certificado obtenido tras x horas en el curso brindado por la universidad..',
    },
    {
      name: 'Certificado IA',
      img: '',
      desc: 'Certificado obtenido tras x horas en el curso brindado por la universidad..',
    },
  ]

  openCert(cert: Cert) {
    this.selectedCert = cert;
  }

  closeModalCert() {
    this.selectedCert = null;
  }

  getCerts() {
    return this.certs;
  }

  // ACTIVITY - CARDS
  selectedActivity: Activity | null=null;

  activities: Activity [] = [
    {
      name: 'NASA SPACE APPS 2025',
      img: '',
      desc: 'Fui participe de la hackathon donde desarrolle junto a mi equipo un software web demostrativo para simulacion educativa basico.',
      link: '',
    },
    {
      name: 'HACK4EDU 2025',
      img: '',
      desc: 'Participe en la hackathon junto a mi equipo multidisciplinario, desarrollando una pagina web para la evaluacion de educacion y bienestar estudiantil psicologico.',
      link: '',
    },
  ]

  openActivity(act: Activity) {
    this.selectedActivity = act;
  }

  closeModalActivity() {
    this.selectedActivity = null;
  }

  getActivities() {
    return this.activities;
  }
}
