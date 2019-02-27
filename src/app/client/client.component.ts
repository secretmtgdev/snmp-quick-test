import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private crud: CrudService) { }

  ngOnInit() {
  }

  sendTrap(): void {
    console.log('Sending trap from CLIENT.COMPONENT.TS');
    this.crud.sendTrap().subscribe(response => console.log(response));
  }
}
