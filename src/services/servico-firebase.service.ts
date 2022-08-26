import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoFirebaseService {

  constructor(private db: AngularFireDatabase) { }


  getAll() {
    return this.db.list('produtos')
    .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, value: c.payload.val() }));
        })
      );
  }
}
