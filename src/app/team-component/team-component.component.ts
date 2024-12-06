import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrl: './team-component.component.css'
})
export class TeamComponentComponent {

  teamcard = [

    {imageurl:"Landing-image.jpg",
      heading:"Mr. Bastin Vijay",
      subheading:"Founder & CEO",
      text:"An EV industry pioneer in South India, Mr. Bastin brings unparalleled expertise in EV manufacturing and lithium battery production to drive EGM's mission."
    },

    {imageurl:"Landing-image.jpg",
      heading:"Mr. Arun Rebero",
      subheading:"Strategy Director",
      text:"With 24+ years of experience in cleantech and international business, Mr. Arun ensures sustainable growth through innovation and ethical practices."
    },
    
    {imageurl:"Landing-image.jpg",
      heading:"Mr. Sathya",
      subheading:"Technical Head (IT)",
      text:"An expert in ICT and AI, Mr. Sathya leads the development of advanced IT systems for EGM’s digital transformation."
    }
  ]

}
