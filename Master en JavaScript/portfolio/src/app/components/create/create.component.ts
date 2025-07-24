import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Form } from '@angular/forms';
import { response } from 'express';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;

  constructor(
    private _projectService: ProjectService
  ){
    this.title = "Crear proyecto";
    this.project = new Project('','','','',2025,'',''); // A la varaible project le decimos que es una nueva instancia del modelo Project y definimos todos sus parametros vacios exepto el year que en este caso de lo damos por default
    this.status = '';
  }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response =>{
        if(response.project){
          this.status = 'succes';
          form.reset();
        }else{
          this.status = 'failed';
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
