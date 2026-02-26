import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ProductState } from '../../product-state.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-filter-input',
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './filter-input.html',
  styleUrl: './filter-input.css',
})
export class FilterInput {
  globalState = inject(ProductState);
  selected: string = '';
  categories = this.globalState.getCategory();
  @Output() myFilterEvent = new EventEmitter<string>();
  selectCategory(category: string) {
    this.myFilterEvent.emit(category);
  }
}
