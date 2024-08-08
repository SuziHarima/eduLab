import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

 
  constructor(private router: Router){
  }


  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', Validators.required),
        senha: new FormControl('', Validators.required)
      }
    );
  }


  logar(){
    if(this.loginForm.valid){
      this.router.navigate(['/home'])
    } else {
      this.loginForm.markAllAsTouched()
    }
    }
  

  recoverPass(){
    window.alert('Processo de recuperação de senha enviado para o e-mail cadastrado')
  };
}



// Nesta atividade, vamos criar a estrutura da tela de login. Esta tela deverá conter:

// Os inputs:
// E-mail (campo obrigatório)
// Senha (campo obrigatório)
// Os botões:
// Entrar
// Quando clicado, caso ambos os campos do formulário estejam preenchidos, o usuário será redirecionado para a tela inicial/home.
