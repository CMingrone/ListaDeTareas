import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EditorService } from 'src/app/servicios/editor.service';
import { Subscription } from 'rxjs'
import {Task} from '../Task'

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  id: number=0;
  text: string="";
  day: string= "";
  reminder: boolean=false;
  showAddTask : boolean=false;
  subscription? : Subscription;

  constructor(
    private editorService: EditorService
  ) {
    this.subscription=this.editorService.onToggle().subscribe(value=>this.showAddTask=value)
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if (this.text.length === 0){
      alert('Please, add a task!');
      return
    }
      const {id,text,day,reminder} = this
      const newTask = {id,text,day, reminder}

      this.onAddTask.emit(newTask);
    }

  }

  
