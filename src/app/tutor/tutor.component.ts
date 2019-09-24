import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-tutor]',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  @Input() tutor;

  @Output() nuevoTutor = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  incluir() {
    this.nuevoTutor.emit('true');
  }
}
