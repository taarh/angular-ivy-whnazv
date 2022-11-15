import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    experiences:Array<Experience> =[]
  constructor() { }

  ngOnInit(): void {

    this.experiences[0] = {titre:"Ingénieur Full Stack JavaEE/Angular", dateDebut:"01/02/2002",dateFin:"01/09/2022",taches:[]}
    this.experiences[0].taches.push({titre:"Développement API Backend JEE."

    });
    this.experiences[0].taches.push({titre:"Développement Web Font Angular."

    });
    this.experiences[0].taches.push({titre:"Revue de code et pull request Git."

    });
    this.experiences[0].taches.push({titre:"Pair Programming."

    });
    this.experiences[0].taches.push({titre:"CI/CD avec Gitlab."

    });
    this.experiences[0].taches.push({titre:"SCRUM."

    });

    // 2EME EXPERIENCES
 
   
    this.experiences[1] = {titre:"Développeur confirmé Java/JavaEE", dateDebut:"01/02/2002",dateFin:"01/09/2022",taches:[]}
    this.experiences[1].taches.push({titre:"Développement des API Backend avec Spring Framework."

    });
    this.experiences[1].taches.push({titre:"Développement Front avec HML/CSS/Javascript"

    });
    this.experiences[1].taches.push({titre:"Ecriture des tests unitaires et d’intégration."

    });
    this.experiences[1].taches.push({titre:"Suivi de la production"

    });
    
    this.experiences[1].taches.push({titre:"CI/CD avec Gitlab."

    });

    console.log("Hello"+JSON.stringify(this.experiences));
   
  }
}
