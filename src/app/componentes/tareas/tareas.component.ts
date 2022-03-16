import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../servicios/task.service';
import {Task} from '../Task'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tasks : Task[] = []

  constructor( 
    private taskService : TaskService)
 
  { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=> {
      this.tasks= tasks
    });
  }
  
  deleteTask(task:Task){
    this.taskService.deleteTask(task)
    .subscribe(
     () => {
      this.tasks = this.tasks.filter( (t) => {
      return t.id !== task.id
      })
  })
  }

  toggleReminder(task:Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
      }
    
  addTask(task : Task){
    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task);
    }

    );
  }
  
}
