import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get(`${environment.api_base_url}/repositories/`)
    .pipe(map(this.loadData))
  }

  private loadData(res: Array<object>): Project[] {

    let data = res.map((item: any) => {
      return {
        name: item.name,
        language: item.language,
        description: item.description
      }
    })

    return data || []
  }
}
