import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private http: HttpClient) { }
  user = {};
  ngOnInit(): void {
  }

  logForm(){
     console.log('dd',this.user);


    this.http.post('/dataSend', this.user).subscribe(res=>{
      console.log('hh',res)
    },
    err => console.log('err',err))

  }

}
