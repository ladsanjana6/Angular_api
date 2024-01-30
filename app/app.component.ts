import { Component } from '@angular/core';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
} )
export class AppComponent {
  title = 'febapp';

  users = []

  ngOnInit () {
    // alert( "hello from ng onit " )

    fetch( "https://reqres.in/api/users?page=1" )
      .then( res => res.json() )
      .then( res => {

        console.table( res.data )
        this.users = res.data
      } )
  }

  deleteuser ( id: any ) {
    alert( id )
    fetch( "https://reqres.in/api/users/" + id )
      .then( res => res.json() )
      .then( res => {

        alert( JSON.stringify( res ) )
      } )
  }


}
