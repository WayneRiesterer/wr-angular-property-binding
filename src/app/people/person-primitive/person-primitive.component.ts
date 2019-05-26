import { Component, OnInit, Input, Output } from '@angular/core';

import { Person } from '../models/person.model';

@Component({
  selector: 'app-person-primitive',
  templateUrl: './person-primitive.component.html',
  styleUrls: ['./person-primitive.component.css']
})
export class PersonPrimitiveComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;

  originalName: string;
  buttonText: string;

  ngOnInit(): void {
    this.originalName = this.name;
    this.setButtonText('Neo');
  }

  onChangeName(): void {
    if (this.name === 'Neo') {
      this.name = this.originalName;
      this.setButtonText('Neo');
    } else {
      this.name = 'Neo';
      this.setButtonText(this.originalName);
    }
  }

  private setButtonText(name: string): void {
    this.buttonText = 'Change name to ' + name;
  }
}