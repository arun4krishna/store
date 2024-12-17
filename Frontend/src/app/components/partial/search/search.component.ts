import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm = '';
  searchTermTest = '';
  constructor (activatedRoute: ActivatedRoute, private router : Router, private foodservice: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    })
  }

  search (item: string): void {
    console.log(this.searchTermTest)
    if(this.searchTermTest == '') {
      this.foodservice.getAll()
    }
    if (item) {
      this.router.navigateByUrl('search/' + item)
    }
  }
}
