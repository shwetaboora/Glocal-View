import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  imgCollection: Array<object> =[
    {
      Image:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-14.jpg",
      thumbImage:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-14.jpg",
      alt:"image1",
      Title:"Image1"
  },

  {
    Image:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-1.jpg",
    thumbImage:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-1.jpg",
    alt:"image2",
    Title:"Image2"
},

{
  Image:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-13.jpg",
  thumbImage:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-13.jpg",
  alt:"image3",
  Title:"Image3"
},

{
  Image:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-12.jpg",
  thumbImage:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-12.jpg",
  alt:"image3",
  Title:"Image4"
},

{
  Image:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-14.jpg",
  thumbImage:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-14.jpg",
  alt:"image1",
  Title:"Image5"
},

{
Image:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-1.jpg",
thumbImage:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-1.jpg",
alt:"image2",
Title:"Image6"
},

{
Image:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-13.jpg",
thumbImage:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-13.jpg",
alt:"image3",
Title:"Image7"
},

{
Image:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-12.jpg",
thumbImage:"https://cdn-jdbdl.nitrocdn.com/MerefFUEskywmXVJmYTOzmNFSRVWUevx/assets/images/optimized/rev-e547fa9/glocalview.com/wp-content/uploads/2022/08/P-12.jpg",
alt:"image3",
Title:"Image8"
},

]
  constructore(){}
ngOnInit(): void {
  
}
}
