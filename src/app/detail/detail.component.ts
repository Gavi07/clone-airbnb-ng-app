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
  public id: string;

  constructor( private route: ActivatedRoute, private experienceService: ExperienceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getExperienceById();
  }

  private getExperienceById() {
    this.experienceService.getExperienceById(this.id).subscribe( data => {
      this.experience = data.experience;
    });
  }

}
