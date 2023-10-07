import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categories } from 'src/app/interfaces/categories';

@Component({
  selector: 'app-specificcategory',
  templateUrl: './specificcategory.component.html',
  styleUrls: ['./specificcategory.component.scss']
})
export class SpecificcategoryComponent implements OnInit {
  categoryId:string = this._ActivatedRoute.snapshot.params['id'];

  specificCategory:Categories|any;


  constructor(private _CategoriesService:CategoriesService,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.getSpecificCategory();
  }

  getSpecificCategory(){
    this._CategoriesService.getSpecificCategories(this.categoryId).subscribe({
      next:(res)=>{
        this.specificCategory = res.data;
      console.log(res.data);
      }
    })
  }




}
