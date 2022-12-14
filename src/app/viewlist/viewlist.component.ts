import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.css']
})
export class ViewlistComponent implements OnInit {

  constructor(private api:ApiService) {this.dataFromApi()}
  dataFromApi=()=>{
    this .api.fetchCorona().subscribe((response:any)=>{this.coronastate=response.data.regional})
  }



  coronastate:any=[]
  ngOnInit(): void {
  }

}
