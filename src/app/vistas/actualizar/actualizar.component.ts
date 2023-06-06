import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { UsuarioModel } from '../../modelos/usuario.interface';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  usuario!: UsuarioModel;

  editarusu = new FormGroup({
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

  ngOnInit(): void {
    const obtId = this.activerouter.snapshot.paramMap.get('id');

    if (obtId) {
      const userId = parseInt(obtId, 10);
      this.api.getUsersiD(userId).subscribe(data => {
        this.usuario = data;
        this.editarusu.patchValue({
          id: userId.toString(),
          name: this.usuario.name,
          username: this.usuario.username,
          email: this.usuario.email,
          address: {
            street: this.usuario.address.street,
            suite: this.usuario.address.suite,
            city: this.usuario.address.city,
            zipcode: this.usuario.address.zipcode
          },
          phone: this.usuario.phone,
          company: {
            name: this.usuario.company.name,
            catchPhrase: this.usuario.company.catchPhrase,
            bs: this.usuario.company.bs
          }
        });
      });
    }
  }
  modificarUsuario(form:any){
    this.usuario = form;
    this.api.modificarUsuario(this.usuario.id,this.usuario).subscribe((res) =>{
      if (res.id) {
        this.toastr.success('Usuario modificado correctamente');
      } else {
        this.toastr.error('Error al modificar el usuario');
      }
    });
  }

  volver() {
    this.router.navigate(['dashboard']);
  }
}
