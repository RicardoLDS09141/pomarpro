import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrl: './cad-usuario.component.scss'
})
export class CadUsuarioComponent {

  constructor(
    private usuarioService:UsuarioService
  ){}

//Inicializa o formulario
  formulario:FormGroup = new FormGroup({
    id:new FormControl(null),
    nome:new FormControl('', Validators.required),
    sobrenome:new FormControl('', Validators.required),
    endereco:new FormControl('', Validators.required),
    telefone:new FormControl('', Validators.required),
    email:new FormControl('', Validators.required),
    login:new FormControl('', Validators.required),
    
    
  })

//Métodos dos controles de formúlario
onIncluir(){
  this.formulario.reset();
  this.formulario.enable();

}
onSalvar(){
  //Guarda as informações em uma variável pra melhorar o acesso
  let info = this.formulario.value;
  //Verificar se está inserida ou alternando com base no valor
  //do ID (se for null, está inserido, senão está alterado)

  if(info.id == null){
   //Irá inserir no banco de dados um usuário
    this.usuarioService.addUsuario(info).subscribe({
      next:(resposta)=>{
        console.log(resposta)
      },
      error:(erro)=>{
        console.log(erro);
      }
      })
  }else{
  //Irá alterar o uasuário no banco de dados

}
}


onCancelar(){
  this.formulario.reset();
  this.formulario.disable();


}


}
