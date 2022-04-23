import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUpperCase } from 'src/app/utilities/validators/firstLetterUpperCase';
import { EventEmitter } from '@angular/core';
import { gameDto } from '../../data/gameDto';

@Component({
  selector: 'app-form-games',
  templateUrl: './form-games.component.html',
  styleUrls: ['./form-games.component.css']
})
export class FormGamesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
          validators: [Validators.required, Validators.minLength(3), firstLetterUpperCase()]
        }]
    }
    )
  }

  @Output()
  onSaveChanges: EventEmitter<gameDto> = new EventEmitter<gameDto>();

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName() {
    const field = this.form.get('title');
    if (!field) return '';
    if (field.hasError('required')) return 'This field is required';
    if (field.hasError('minlength')) return 'Minimum length is 3';
    if (field.hasError('firstLetterUpperCase')) return field.getError('firstLetterUpperCase').message;
    return '';
  }

}
