import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loginForm: FormGroup;
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  finish() {
    (!this.loginForm.valid)
      ? alert('Campos de login preenchidos incorretamente')
      : this.login();
  }

  login(): void {
    this.usuarioService.get(this.loginForm.value)
      .subscribe(res => {
        if (res && res[0]) {
          console.log('user', JSON.stringify(res));
          
          localStorage.setItem('user', JSON.stringify(res));
        } else {
          alert('Erro, usuário não encontrado na pesquisa, por favor realize o cadastro no sistema.')
          console.log('2');
        }
      }, err => {
        console.error(err);
      })
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      id: [null],
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });

    this.cadastroForm = this.fb.group({
      id: [null],
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  finishCadastro() {
    (!this.cadastroForm.valid)
      ? alert('Campos de cadastro preenchidos incorretamente')
      : this.cadastro();
  }

  cadastro(): void {
    this.usuarioService.post(this.cadastroForm.value)
      .subscribe(res => {
        alert('Usuario Cadastroado com sucesso!')
      }, err => {
        alert('Erro em cadastrar o usuário!')
        console.log(err)
      });
  }

}
