import { Component, OnInit } from '@angular/core';
import foodList from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods:any[];
  newFood: any ={};
  toggleForm:boolean = false;
  todaysFoodList: Array<any> = [];
  totalCalories: number = 0;

  constructor() { }

  ngOnInit() {
    this.foods = foodList;
  }

  showForm():void{
    this.toggleForm = !this.toggleForm;
  }

  todaysFood(i:number): void{
    this.todaysFoodList.push(this.foods[i]);
    this.totalCalories += this.foods[i].calories;
  }


  addFoodItem():void{
    console.log(this.newFood.name)
    const addFood = {name: this.newFood.name, calories: this.newFood.calories, image: this.newFood.image};
    this.foods.push(addFood);
    this.toggleForm = !this.toggleForm;
  }
}
