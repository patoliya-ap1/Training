import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
productId:string |null =null
constructor(private route:ActivatedRoute) {

}
ngOnInit(): void {
  this.productId =this.route.snapshot.paramMap.get("id")
}
}
