import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent{
  public counter:number = 10

  increaseBy():void{
    this.counter++;
  }
  decreaseBy():void{
    this.counter--
  }
  reset():void{
    this.counter=10
  }
}
