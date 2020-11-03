import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { IExperience } from 'src/app/shared/models/experience.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public experiences: Array<IExperience>;

  constructor( private experienceService: ExperienceService ) {}

  ngOnInit() {
    this.getTop5();
  }

  private getTop5() {
    this.experienceService.getTop5().subscribe( data => {
      this.experiences = data.top5;
    });
  }

}
