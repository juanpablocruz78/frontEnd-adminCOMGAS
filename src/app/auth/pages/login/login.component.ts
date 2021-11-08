import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* import { SecurityService } from 'src/app/core/lib/auth/security.service';
import { DataService } from 'src/app/core/services/data.service';
import { MessageService } from 'src/app/core/services/message.service'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(private _formBuilder: FormBuilder,
              private router: Router) {

  }

  ngOnInit() {
    {
      this.loginForm = this._formBuilder.group({
          username   : ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });
  }
  }

  
  login(event: Event) {

    // this.authService.autentificar(this.loginForm.value.username, this.loginForm.value.password).subscribe(
    //   (response: any) => {
    //   }
    //  );
    if ('admin@ypfb.gob.bo' == this.loginForm.get('username')?.value && '123' == this.loginForm.get('password')?.value) {
      //this.dataService.sendToken('JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ');
      sessionStorage.setItem('token', 'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ');   
      this.router.navigate(['/GestionDeUsuario']);
    } else {
      //this.messageService.showError('El usuario y/o contraseña son incorrectas');
    }
  }

  redirect() {
  }

}
