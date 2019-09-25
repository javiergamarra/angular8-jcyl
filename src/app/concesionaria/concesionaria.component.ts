import { Component, OnInit } from '@angular/core';
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
    <input [(ngModel)]="concesionaria.nombre" />
    <input [(ngModel)]="concesionaria.provincia" />
    <button (click)="crear()">Crear</button>

    <ul>
      <li *ngFor="let item of items">
        {{ item.nombre }}, {{ item.provincia }} [<span
          (click)="eliminar(item.id)"
          >Eliminar</span
        >]
      </li>
    </ul>
  `,
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
