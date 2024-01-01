import { Component, OnInit } from '@angular/core';
import { GeneralContentService } from '../../services/general-content.service';
import { GeneralContent } from '../../models/general-content/generalContent';

@Component({
  selector: 'app-general-content',
  templateUrl: './general-content.component.html',
  styleUrl: './general-content.component.css'
})
export class GeneralContentComponent implements OnInit {
  dataLoaded: boolean = false;
  generalContents: GeneralContent[];
  currentGeneralContent: GeneralContent;

  constructor(private generalContentService : GeneralContentService) {
  }

  ngOnInit():void {
    this.getGeneralContents();
  }

  getGeneralContents(){
    this.generalContentService.getGeneralContents().subscribe((response) => {
      this.generalContents = response.data;
      this.dataLoaded = true;
    })
  }
}
