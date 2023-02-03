import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { errorPrefix } from '@firebase/util';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {}

  
  get email() {
    return this.loginForm.get('email');
  }
  
  get password() {
    return this.loginForm.get('password');
  }

  submit(){
    if(!this.loginForm.valid){
      return;
    }

    const{ email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next:() => {
        alert("login successful");
        this.router.navigate(['/products']);
      },
      error:(err)=>{
        alert(err.message);
        //console.log(errorPrefix)
      }
    }); 
  }
  logout(){
    this.authService.logout().subscribe(() => {
      this.router.navigate(['landing']);
    });
  }

}
