import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  city: any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {

  }

  async getCity() {
    this.city = await this.httpService.getCity();
    console.log(this.city);
  }
}

