import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';

export interface Concesionaria {
  id: string;
  nombre: string;
  provincia: string;
}

@Component({
  selector: 'app-concesionaria',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-3">
          <input [(ngModel)]="concesionaria.nombre" />
        </div>
        <div class="col-sm-3">
          <input [(ngModel)]="concesionaria.provincia" />
        </div>
        <div class="col-sm-3">
          <button (click)="crear()">Crear</button>
        </div>
        <div class="col-sm-3 offset-sm-2">
          <ul>
            <li *ngFor="let item of items">
              {{ item.nombre }}, {{ item.provincia }} [<span
                (click)="eliminar(item.id)"
                >Eliminar</span
              >]
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./concesionaria.component.css']
})
export class ConcesionariaComponent implements OnInit {
  concesionaria: Concesionaria = { id: '', nombre: '', provincia: '' };
  items: Concesionaria[];
  collection: AngularFirestoreCollection<Concesionaria>;
  constructor(private af: AngularFirestore) {
    this.collection = af.collection<Concesionaria>('concesionarias');
    this.collection
      .valueChanges({ idField: 'id' })
      .pipe(tap(x => console.log(x)))
      .subscribe(x => (this.items = x));
  }

  crear() {
    this.collection.add(this.concesionaria);
  }

  eliminar(id) {
    this.af
      .doc('concesionarias/' + id)
      .delete()
      .then(x => console.log(x));
  }

  ngOnInit() {}
}
