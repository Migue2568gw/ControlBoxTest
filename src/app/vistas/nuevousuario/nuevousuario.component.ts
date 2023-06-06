import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { UsuarioModel} from '../../modelos/usuario.interface';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit{

  usuario!: UsuarioModel;

  crearusu = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl('')
    }),
    phone: new FormControl(''),
    company: new FormGroup({
      name: new FormControl(''),
      catchPhrase: new FormControl(''),
      bs: new FormControl('')
    })
  });

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private toastr: ToastrService
  ) { }
ngOnInit(): void {}

crearUsuario(form:any){
  this.usuario = form;
    this.api.crearUsuario(this.usuario).subscribe((res) =>{
      if (res.id) {
        this.toastr.success('Usuario Creado correctamente');
      } else {
        this.toastr.error('Error al Crear el usuario');
      }
    });
}

volver() {
  this.router.navigate(['dashboard']);
}
}
