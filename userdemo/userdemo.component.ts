import { Component, OnInit } from '@angular/core';
import { Service2Service } from '../services2/service2.service';

@Component({
  selector: 'app-userdemo',
  templateUrl: './userdemo.component.html',
  styleUrls: ['./userdemo.component.css']
})
export class UserdemoComponent implements OnInit {

  users :user[]=[];
  constructor(private demo2:Service2Service) { }

  ngOnInit() {
    this.demo2.getPost().subscribe((data =>{
      this.users = data
    }))
  }


}

class user {
  userId: number;
  id: number;
  title: string
  body: string
}
