import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { PersonPrimitiveComponent } from './person-primitive/person-primitive.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PeopleComponent, PersonComponent, PersonPrimitiveComponent],
  declarations: [PeopleComponent, PersonComponent, PersonPrimitiveComponent]
})
export class PeopleModule { }