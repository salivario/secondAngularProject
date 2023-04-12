import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Clients } from 'src/app/interfaces/clients';
import { ClientsResolverService } from 'src/app/services/clients-resolver.service';
import { IClients } from 'src/app/interfaces/iclients';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{
  constructor(private ClientsResolverService: ClientsResolverService){}
  clients$!: Observable<Clients[]>;
  ngOnInit(){
    this.clients$ = this.ClientsResolverService.getClients();
  }
  delete(client: any){
    this.ClientsResolverService.deleteclient(client.id).subscribe(() => {
      this.ClientsResolverService.getClients();;
    });

  }

}
