import { Component, OnInit, Input, Output } from '@angular/core';

import { Person } from '../models/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  originalName: string;
  buttonText: string;

  ngOnInit(): void {
    this.originalName = this.person.name;
    this.setButtonText('Neo');
  }

  onChangeName(): void {
    if (this.person.name === 'Neo') {
      this.person.name = this.originalName;
      this.setButtonText('Neo');
    } else {
      this.person.name = 'Neo';
      this.setButtonText(this.originalName);
    }
  }

  private setButtonText(name: string): void {
    this.buttonText = 'Change name to ' + name;
  }
}