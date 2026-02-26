import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { DataStore } from './data-store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private dataservice: DataStore) {}
  protected readonly title = signal('ng-shop');
  ngOnInit(): void {
    console.log('run app');
    this.dataservice.fetchData().subscribe();
  }
}
