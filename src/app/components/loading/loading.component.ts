import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading:boolean = false;

  constructor(private _LoadingService:LoadingService){}
  
  ngOnInit(): void {
    this._LoadingService.isLoading.subscribe({
      next:(res)=>{
        this.isLoading=res;
      }
    })
  }
  


  


}
