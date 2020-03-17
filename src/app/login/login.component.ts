import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  logForm(e){
     console.log('dd',e);


    this.http.post('http://localhost:4800/dataSend', e).subscribe(res=>{
      console.log('hh',res)
    },
    err => console.log('err',err))

  }

}
