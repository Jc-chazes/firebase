import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-angulardev',
  templateUrl: './angulardev.component.html',
  styleUrls: ['./angulardev.component.css']
})
export class AngulardevComponent implements OnInit {
  serie: String = '';
  series: any[];
  listSeries: any[];
  id: number ;
  constructor(public db: AngularFireDatabase) {
    this.getDataFirebase();
  }
  ngOnInit() {
  }
  getDataFirebase() {
    this.db.list('/HEROES/').valueChanges().subscribe(
      data => {
        this.series = data;
      }
    );
  }
  deleteSerie() {
    this.listSeries.map(val => {
      this.db.list('HEROES/' + val.id).remove();
    });
  }
  send() {
    if (this.serie !== '') {
      this.id = Date.now();
      this.db.database.ref('HEROES/' + this.id).set({
        id: this.id,
        serie: this.serie });
      this.serie = '';
    }
  }
}
