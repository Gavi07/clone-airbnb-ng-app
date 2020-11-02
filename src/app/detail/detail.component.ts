import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienceService } from '../services/experience/experience.service';
import { IExperience } from '../shared/models/experience.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public experience: IExperience;

  constructor( private route: ActivatedRoute, private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getParams();
  }

  private getParams() {
    this.route.params.subscribe( params => {
      const id = Number( params.id );
      console.log('id: ', id);
      this.experience = this.experienceService.getExperienceById(id);
    });
  }

}
