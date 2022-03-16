import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/servicios/editor.service'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
  title : string = 'taskList';
  showAddTask : boolean = false;
  subscription? : Subscription;
  
  constructor(
    private editorService:EditorService,
    private router:Router
  ) { 

    this.subscription=this.editorService.onToggle().subscribe(value=>this.showAddTask=value)
  }


  ngOnInit(): void {
  }

  agregarTarea(){
    this.editorService.toggleAddTask();
  }

  hasRouter(route:string){
    return this.router.url === route
  }

}
