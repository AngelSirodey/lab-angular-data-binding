import { Component, OnInit } from '@angular/core';
import foods from '../foods';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {
foods: Object[];
newFood: Object = {};
active: boolean = false;
newList: Object[] = [];
caloriesCount: Number = 0;
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

change() {
  this.active = !this.active;
}

  addFood() {
    this.active = true;
    this.foods.push(this.newFood);
    this.newFood = {
      name: '',
      calories: '',
      image: ''
    };
  }

addList(food) {
  this.newList.push(food);
  this.caloriesCount += food.calories;
};
}
