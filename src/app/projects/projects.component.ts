import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
