import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ConsultaService } from 'src/app/shared/services/consulta.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  public exibirBotao: boolean = false;

  constructor(private consultaService: ConsultaService) {}

  ngOnInit(): void {
    this.subscription = this.consultaService.exibicaoAtual.subscribe(
      (exibir: boolean) => (this.exibirBotao = exibir)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public abrirNovaAdmissao(): void {
    
  }
}
