import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioModel } from '../../modelos/usuario.interface';

@Component({
  selector: 'app-detalleusuario',
  templateUrl: './detalleusuario.component.html',
  styleUrls: ['./detalleusuario.component.css']
})
export class DetalleusuarioComponent implements OnInit {

  usuario: UsuarioModel | null = null;

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const obtId = this.activerouter.snapshot.paramMap.get('id');

    if (obtId) {
      const userId = parseInt(obtId, 10);
      this.api.getUsersiD(userId).subscribe(data => {
        this.usuario = data;
      });
    }
  }

  EliminarUsuario(id:number){
    this.api.eliminarUsuario(id).subscribe((res) =>{
      console.log(res)
      if (res && Object.keys(res).length === 0) {
        this.toastr.success('Usuario eliminado satisfactoriamente');
        this.router.navigate(['dashboard']);
      }
    });
   
  }

  volver(){
    this.router.navigate(['dashboard']);
  }
}
