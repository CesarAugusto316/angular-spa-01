import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  public times = faTimes;
  @Input() task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    console.log('delete item:', task.text)
  }
}
