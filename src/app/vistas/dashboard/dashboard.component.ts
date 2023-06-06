import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service'
import { Router } from '@angular/router'
import { UsuarioModel } from '../../modelos/usuario.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe(data => {
      this.usuarios = data;
    })
  }

  nuevoUsuario() {
    this.router.navigate(['nuevousuario']);
  }

  detalleUsuario(id: number) {
    this.router.navigate(['detalleusuario', id]);
  }

  modificarUsuario(id: number) {
    this.router.navigate(['actualizar', id]);
  }
}
