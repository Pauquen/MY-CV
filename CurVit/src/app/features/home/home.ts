import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Credentials } from '../credentials/credentials';
import { Hero } from '../hero/hero';
import { Now } from '../now/now';
import { Projects } from '../projects/projects';
import { Skills } from '../skills/skills';
import { Timeline } from '../timeline/timeline';

/**
 * Página única del CV. Solo compone secciones: cada una vive en su
 * propio componente y toma sus textos de `core/i18n`.
 */
@Component({
  selector: 'app-home',
  imports: [About, Contact, Credentials, Hero, Now, Projects, Skills, Timeline],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
