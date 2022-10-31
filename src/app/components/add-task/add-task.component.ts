import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interfaces/Task';
import { UiService } from 'src/app/services/ui.service';


let i = 3;

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public text = "";
  public day = "";
  public reminder = true;
  public showAddTask!: boolean;
  public subscription: Subscription;
  @Output() onAddTask = new EventEmitter<Task>();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const newTask = {
      id: ++i,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    }
    this.onAddTask.emit(newTask)
    console.log('form submitted', newTask)
    this.text = '';
    this.day = '';
  }
}
