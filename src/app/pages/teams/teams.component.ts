import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any[] = [];

  constructor(private _teamsService: TeamsService) {
    this._teamsService.getTeams()
      .subscribe((data: any[]) => {
          console.log(data);
          this.teams = data;
        });
  }

  ngOnInit() {
  }

}
