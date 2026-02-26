import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStore {
  private apiUrl = 'http://localhost:8000/products';
  private dataSubject = new BehaviorSubject<any[]>([]);
  public readonly data$ = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {} //

  fetchData(): Observable<any[]> {
    if (this.dataSubject.value.length > 0) {
      return this.data$;
    }

    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((data) => {
        this.dataSubject.next(data);
      }),
    );
  }
}
