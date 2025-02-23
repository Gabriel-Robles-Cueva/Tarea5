import { Component, Input } from '@angular/core';
import { INotices } from '../../interfaces/i-notices';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [ReactiveFormsModule, CommonModule],
  providers: [DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() listaNoticias: INotices[] = [
    {title: "Prueba", image:"https://placehold.co/300x200", text:"texto de prueba", date: new Date().toISOString().split('T')[0]},
    {title: "Prueba2", image:"https://placehold.co/300x200", text:"texto de prueba 2", date: new Date().toISOString().split('T')[0]}
  ]

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [
        Validators.required
      ]),
      text: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl(new Date().toISOString().split('T')[0], [
        Validators.required
      ])
    })
  }

  onSubmit(){
    if (this.form.valid) {
      this.listaNoticias.push(this.form.value);
      this.form.reset();
    }else{
      alert("Todos los campos son obligatorios");
    }
  }
}
