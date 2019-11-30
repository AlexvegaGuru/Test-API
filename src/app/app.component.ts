import { Component, OnInit } from '@angular/core';
import { GitService } from './git.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-api';
  userName = "AlexvegaGuru";
  userRepo = "Test-API";
  selected = 0;
  commits;
  errorMessage="";
  loading=false;

  constructor(
    private gitService: GitService
  ) {

  }

  ngOnInit() {
    this.getInfo();
  }

  getStringDate(str) {
    return (new Date(str)).toLocaleString();
  }

  getInfo() {
    this.errorMessage="";
    this.loading=true;
    this.gitService.getCommits(this.userName, this.userRepo).subscribe(result => {
      this.commits = result;
      console.log(result);
      this.loading=false;
    },
    err => {
      if (err.status == 401) {
        this.errorMessage =  "Unauthroized, check your credentials"
      } else {
        this.errorMessage = "Could not find this user/repository! Please check again";
      }
      this.loading=false;
    })
  }
}
