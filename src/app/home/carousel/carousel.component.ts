import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
  constructor() { }
  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: "https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-d23da17/glocalview.com/wp-content/uploads/2022/07/ar-1.jpg",
      title: 'Imagination to Reality with Best Augmented Reality Service Company',
      subtitle: 'We are a leading service provider of Animation | Game Development ( Mobile | Web | PC | VR Game )'
    };
    this.slides[1] = {
      id: 1,
      src: "https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-d23da17/glocalview.com/wp-content/uploads/2022/07/slider1.webp",
      title: 'Empower Your Business with Best Mobile | Web App Development',
      subtitle: 'We are a leading service provider of IT consulting, Mobile app development | Custom App Development'
    }
    this.slides[2] = {
      id: 2,
      src: "https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-d23da17/glocalview.com/wp-content/uploads/2022/07/Banner-1.jpg",
      title: 'Get Innovative Workforces Solutions with Best IT consulting Company',
      subtitle: 'We are a leading service provider of IT consultant Resource Management to organizations',

    }
  }
}
