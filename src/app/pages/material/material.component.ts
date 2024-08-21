import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { validateHorizontalPosition, validateVerticalPosition } from '@angular/cdk/overlay';
import { MaterialService } from '../../services/material.service';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.scss'
})
export class MaterialComponent {


  constructor(
    private materialService:MaterialService,
    private snackbar:MatSnackBar
  ){
    this.buscaMateriais()
  }
//Inicializa o material
  formulario:FormGroup = new FormGroup({
    id:new FormControl(null),
    nome:new FormControl('', Validators.required),
    valor:new FormControl('', Validators.required),
    fornecedor:new FormControl('', Validators.required),
    tipo:new FormControl('', Validators.required),
    
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
   //Irá inserir no banco de dados um material
    this.materialService.addmaterial(info).subscribe({
      next:(resposta)=>{
        console.log(resposta);
        this.snackbar.open(
          "Material adicionado com sucesso!",
          "OK",{
            verticalPosition:'top',
            horizontalPosition:'end',
            duration:3000

          }
        )
        this.onCancelar
      },
      error:(erro)=>{
        console.log(erro);
      }
      })
  }else{
  //Irá alterar o material no banco de dados
 
}
}


onCancelar(){
  this.formulario.reset();
  this.formulario.disable();


}
// Função para buscar as informações e usuários
relatorio:any[] = [];

buscaMateriais(){
  

}


}
  





