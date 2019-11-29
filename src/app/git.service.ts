import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(
    private http: HttpClient
  ) { }

  getCommits(userName, userRepo) {
    return this.http.get(`repos/${userName}/${userRepo}/commits`);
  }
}
