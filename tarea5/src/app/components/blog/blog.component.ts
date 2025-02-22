import { Component, Input } from '@angular/core';
import { INotices } from '../../interfaces/i-notices';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() listaNoticias: INotices[] = [
    {title: "Prueba", image:"", text:"texto de prueba", date: "a"},
    {title: "Prueba2", image:"https://placehold.co/300x200", text:"texto de prueba 2", date: "b"},
    {title: "Prueba", image:"https://placehold.co/300x200", text:"texto de prueba 3", date: "c"}
  ]
}
