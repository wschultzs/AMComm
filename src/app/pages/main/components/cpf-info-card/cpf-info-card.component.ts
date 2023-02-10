import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-cpf-info-card',
  templateUrl: './cpf-info-card.component.html',
  styleUrls: ['./cpf-info-card.component.scss']
})
export class CpfInfoCardComponent {
  @Input() exibirConsulta: boolean = false;

  public tipoDeConta: string;

  constructor(private modalService: ModalService) {}

  public abrirDuplicarConta(conta: string): void {
    this.modalService.alternarDuplicarConta(!this.modalService.duplicarConta);

    this.tipoDeConta = conta;
  }
}
