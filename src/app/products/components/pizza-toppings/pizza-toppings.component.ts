import {
  Component,
  OnInit,
  Input,
  forwardRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Topping } from 'src/app/products/models/toppings.model';


const PIZZA_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaToppingsComponent),
  multi: true,
};

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  providers: [PIZZA_TOPPINGS_ACCESSOR],
  styleUrls: ['./pizza-toppings.component.scss']
})
export class PizzaToppingsComponent implements OnInit {
  @Input() toppings: Topping[] = [];
  value: Topping[] = [];
  private onTouch: Function;
  private onModelChange: Function;




  constructor() { }

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: Topping[]) {
    this.value = value;
  }

  selectTopping(topping: Topping) {
    if (this.existsInToppings(topping)) {
      this.value = this.value.filter(item => item.id !== topping.id);
    } else {
      this.value = [...this.value, topping];
    }
    this.onTouch();
    this.onModelChange(this.value);
  }

  existsInToppings(topping: Topping) {
    return this.value.some(val => val.id === topping.id);
  }

  ngOnInit() {
  }

}
