import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { rotacaoService } from '../../service/rotacao.service';



@Component({
  selector: 'app-rotacao',
  templateUrl: './rotacao.component.html',
  styleUrl: './rotacao.component.scss'
})
export class RotacaoComponent {
  
  constructor(
 private rotacaoService:rotacaoService,
 private snackbar:MatSnackBar
    
  ){
    this.buscarotacao()
  }



  rotacao:FormGroup = new FormGroup({ 
    id:new FormControl(null),
   quantidade:new FormControl('', Validators.required),
    tb_tipo_id:new FormControl('', Validators.required),
    produto:new FormControl('', Validators.required)

    
   


  })
  onIncluir(){
    this.rotacao.reset();
    this.rotacao.enable();
  }

 
  onSalvar(){
    //guarda as informacoes em uma variavel pra melhorar o processo
    let info = this.rotacao.value;
    //verifica se esta inserindo ou alterando com base no valor do id (se for null, esta inserindo, senao esta alterando)
    if(info.id == null){
      //ira inserir no banco de dados um usuario
      this.rotacaoService.addrotacao(info).subscribe({
        next:(resposta)=>{
          console.log(resposta)
          this.snackbar.open(
            "rotacao adicionado com sucesso",
            "OK",{
              verticalPosition:'top',
              horizontalPosition:'end',
              duration:3000
            }
          )
          this.onCancelar()
        },
        error:(erro)=>{
          console.log(erro)
          this.snackbar.open(
            "Erro ao adicionar rotacao",
            "OK",{
              verticalPosition:'top',
              horizontalPosition:'end',
              duration:3000
            }
          )
          
        }
      })
    }else{
      //ira alterar o usuario no banco de dados

    }


  }

  onCancelar(){
    this.rotacao.reset();
    this.rotacao.disable();
  }

  relatorio:any[] = [];


  buscarotacao(){
    this.rotacaoService.getrotacao().subscribe({
      next:(resposta)=>{
        console.log(resposta);
        this.relatorio = resposta.body;
    },
    error:(erro)=>{
      console.log(erro)
    }

    })
  }

  }



