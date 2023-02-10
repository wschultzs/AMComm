import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private abrirDuplicarSubject = new BehaviorSubject(false);

  public duplicarContaObservable = this.abrirDuplicarSubject.asObservable();

  constructor() { }

  public alternarDuplicarConta(abrir: boolean): void {
    this.abrirDuplicarSubject.next(abrir)
  }

  get duplicarConta(): boolean {
    const abrir = false;

    this.duplicarContaObservable.subscribe((abrir: boolean) => abrir = abrir);

    return abrir;
  }
}
