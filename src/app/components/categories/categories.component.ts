import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/interfaces/categories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  allCategories:Categories[]=[];

  constructor(private _CategoriesService:CategoriesService ){}
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this._CategoriesService.getAllCategories().subscribe({
      next:(res)=> this.allCategories = res.data,
      error: (err) => console.log(err),
      complete: ()=> console.log('success')
    })
  }
}
