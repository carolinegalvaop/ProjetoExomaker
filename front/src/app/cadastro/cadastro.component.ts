import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Users } from '../model/Users';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: Users = new Users

  confirm: Users = new Users

  alerta: boolean = false

  constructor(private usersService: UsersService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(){
    if(this.user.senha!=this.confirm.senha){
      this.alerta = true
    }else{
      this.usersService.postUser(this.user).subscribe((resp: Users)=>{
        this.user = resp
        this.router.navigate(['/users'])
    })
    }
  }

}
