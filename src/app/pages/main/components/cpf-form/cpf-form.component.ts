import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Validacoes } from 'src/app/core/helpers/Validacoes';
import { ConsultaService } from 'src/app/shared/services/consulta.service';

@Component({
  selector: 'app-cpf-form',
  templateUrl: './cpf-form.component.html',
  styleUrls: ['./cpf-form.component.scss'],
})
export class CpfFormComponent {
  public consultaForm = this.fb.group({
    cpf: new FormControl(
      '',
      Validators.compose([Validators.required, Validacoes.ValidaCpf])
    ),
  });

  public exibirConsulta: boolean;

  constructor(
    private fb: FormBuilder,
    private consultaService: ConsultaService
  ) {}

  public consultar(): void {
    this.exibirConsulta = !this.consultaService.exibicao;
    this.consultaService.alternarExibicao(!this.consultaService.exibicao);
  }
}
