import { Component, Input } from '@angular/core';
import { INotices } from '../../interfaces/i-notices';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [ReactiveFormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() listaNoticias: INotices[] = [
    {title: "Prueba", image:"", text:"texto de prueba", date: "a"},
    {title: "Prueba2", image:"https://placehold.co/300x200", text:"texto de prueba 2", date: "b"}
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
      date: new FormControl('', [
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
