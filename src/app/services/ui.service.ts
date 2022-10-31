import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask!: boolean;
  private subject = new Subject<boolean>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
