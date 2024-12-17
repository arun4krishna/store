import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods, sample_tags } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAG_URL, FOODS_URL } from '../shared/constants/urls';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAll (): Observable<Food[]> {
    // debugger
    return this.http.get<Food[]>(FOODS_URL)
  }
  getAllFoodBySearchItem(searchTerm: string) {
    // debugger
    console.log(FOODS_BY_SEARCH_URL + searchTerm, 'FOODS_BY_SEARCH_URL + searchTerm')
    //from ui get result
    // return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm)
  }

  getFoodById(foodId: string):Observable<Food> {
    // return this.getAll().find(food => food.id == foodId) ?? new Food();
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId)
  }

  getAllTags ():Observable<Tag[]> {
    // return sample_tags
    return this.http.get<Tag[]>(FOODS_TAG_URL)
  }

  getAllFoodByTag (tag: string): Observable<Food[]> {
    // debugger
    console.log(FOODS_BY_TAG_URL + tag, 'FOODS_BY_TAG_URL + tag')
    // return tag === "All"? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
    return tag === "All"? this.getAll() : this.http.get<Food[]>(FOODS_BY_TAG_URL + tag)
  }
}
