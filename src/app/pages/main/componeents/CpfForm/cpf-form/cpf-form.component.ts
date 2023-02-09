import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Validacoes } from 'src/app/core/helpers/Validacoes';

@Component({
  selector: 'app-cpf-form',
  templateUrl: './cpf-form.component.html',
  styleUrls: ['./cpf-form.component.scss'],
})
export class CpfFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  public consultaForm = this.fb.group({
    cpf: new FormControl(
      '',
      Validators.compose([Validators.required, Validacoes.ValidaCpf])
    ),
  });

  public ngOnInit(): void {}
}
