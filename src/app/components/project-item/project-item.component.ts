import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() project;

  constructor() { }

  ngOnInit(): void {
    console.log("project", this.project)
  }

  getUrl(urlString)
  {
    return  "url('" + urlString + "')";
  }


}
