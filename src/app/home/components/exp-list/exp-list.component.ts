import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { IExperience } from 'src/app/shared/models/experience.model';

@Component({
  selector: 'app-exp-list',
  templateUrl: './exp-list.component.html',
  styleUrls: ['./exp-list.component.scss']
})
export class ExpListComponent implements OnInit {

  public list: Array<IExperience>;

  constructor( private experienceService: ExperienceService ) { }

  ngOnInit() {
    this.list = this.experienceService.getExperiences();
  }

}
