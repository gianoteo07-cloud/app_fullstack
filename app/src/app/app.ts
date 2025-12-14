import { OnInit, signal } from "@angular/core";
import { SpesaService } from "./services/spesa-service";

export class App implements OnInit {
lista = signal<any[]>([]);
nuovoElemento = signal('');
constructor(private spesa: SpesaService) {}
ngOnInit() {
this.caricaLista();
}

caricaLista() {
this.spesa.getLista().subscribe((dati: any) => {
this.lista.set(dati);
});
}
aggiungi() {
const val = this.nuovoElemento().trim();
if (!val) return;
this.spesa.aggiungiElemento(val).subscribe(() => {
this.nuovoElemento.set('');
this.caricaLista();
});
}
}