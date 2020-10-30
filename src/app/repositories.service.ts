import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from './repo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  private githubApi: string = 'https://api.github.com'

  constructor(private http: HttpClient) { }

  getRepositories(username: string): Observable<Repo[]> {
    console.log(`${this.githubApi}/users/${username}/repos`);

    return this.http.get(`${this.githubApi}/users/${username}/repos`)
    .pipe(map(this.loadData))
  }

  private loadData(res: Array<object>): Repo[] {

    let data = res.map((item: any) => {
      return {
        name: item.name,
        language: item.language,
        url: item.html_url
      }
    })

    return data || []
  }
}
