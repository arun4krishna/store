import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods: Food[] = [];
  constructor(private foodservice: FoodService, activateRoute: ActivatedRoute) {
    // debugger
    let foodsObservable: Observable<Food[]>;
    activateRoute.params.subscribe((params) => {
      console.log(activateRoute)
      if (params.searchTerm) {
        foodsObservable = this.foodservice.getAllFoodBySearchItem(params.searchTerm);
      }
      else if (params.tag)
        foodsObservable = this.foodservice.getAllFoodByTag(params.tag)
      else 
        foodsObservable = foodservice.getAll()

        foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
  }
}