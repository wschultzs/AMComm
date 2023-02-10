import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-duplicar-conta-modal',
  templateUrl: './duplicar-conta-modal.component.html',
  styleUrls: ['./duplicar-conta-modal.component.scss'],
})
export class DuplicarContaModalComponent implements OnInit {
  @ViewChild('duplicarConta') duplicarConta: ElementRef;

  @Input() tipoDeConta: string;

  constructor(
    private bootstrapModalService: NgbModal,
    private applicationModalService: ModalService
  ) {}

  ngOnInit(): void {
    this.applicationModalService.duplicarContaObservable.subscribe(
      (abrir: boolean) => {
        if (abrir) this.abrirModal();
        else this.fecharModal();
      }
    );
  }

  public abrirModal(): void {
    this.bootstrapModalService.open(this.duplicarConta, {
      centered: true,
    });
  }

  public fecharModal(): void {
    this.bootstrapModalService.dismissAll();
  }
}
