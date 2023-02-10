import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private exibirConsulta = new BehaviorSubject(false);

  public exibicaoAtual = this.exibirConsulta.asObservable();

  constructor() { }

  public alternarExibicao(exibir: boolean): void {
    this.exibirConsulta.next(exibir)
  }

  get exibicao(): boolean {
    const exibir = false;

    this.exibicaoAtual.subscribe((exibir: boolean) => exibir = exibir);

    return exibir;
  }
}
