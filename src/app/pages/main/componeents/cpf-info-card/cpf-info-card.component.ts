import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cpf-info-card',
  templateUrl: './cpf-info-card.component.html',
  styleUrls: ['./cpf-info-card.component.scss']
})
export class CpfInfoCardComponent {
  @Input() exibirConsulta: boolean = false;
}
