import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .subscribe(
        {
          next: tasks => { this.tasks = tasks },
          error: (err) => console.log(err)
        }
      )
  }

  deleteTask(taskToDelete: Task) {
    this.taskService
      .deleteTaks(taskToDelete)
      .subscribe(
        {
          next: () => {
            this.tasks =
              this.tasks
                .filter(task => task.id !== taskToDelete.id);
          },
          error: (err) => console.log(err),
          complete: () => console.log(taskToDelete.id, 'task deleted from my App')
        }
      )
  }

  toggleReminder(taskToUpdate: Task) {
    this.taskService
      .updateTask({ ...taskToUpdate, reminder: !taskToUpdate.reminder })
      .subscribe(
        {
          next: (updatedTask) => {
            this.tasks =
              this.tasks
                .map(task => {
                  if (task.id === taskToUpdate.id) {
                    return updatedTask
                  }
                  return task
                });
          },
          error: (err) => console.log(err),
          complete: () => console.log(taskToUpdate.id, 'task updated from my App')
        }
      )
  }

  addTask(task: Task) {
    this.taskService
      .addTask(task)
      .subscribe(
        {
          next: (task) => { this.tasks = this.tasks.concat(task) },
          error: (err) => console.log(err)
        }
      )
  }
}
