import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../Task'
import {TASKS} from '../mock-task'
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css']
})
export class ItemTareaComponent implements OnInit {

  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter() 
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task){
    this.onToggleReminder.emit(task);
  }
}
