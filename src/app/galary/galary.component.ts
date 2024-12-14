import { Component } from '@angular/core';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrl: './galary.component.css'
})
export class GalaryComponent {
  images=[
    {
      imageUrl:"galaryimg1.jpeg"
    },
    {
      imageUrl:"galaryimg2.jpeg"
    },
    {
      imageUrl:"galaryimg3.jpeg"
    },
    {
      imageUrl:"galaryimg4.jpeg"
    },
    {
      imageUrl:"galaryimg5.jpeg"
    }
  ]

}
