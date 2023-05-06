import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit { 
  form:FormGroup;
 constructor(private formBuilder:FormBuilder){
  this.form=this.formBuilder.group(
    {
      CorreoElectronico:['',[Validators.required,Validators.CorreoElectronico]],
      contraseña:['', [Validators.required,Validators.minLength(8)]],
      deviceInfo:this.formBuilder.group({
      deviceId:[ "17867868768"],
      deviceType:["DEVICE_TYPE_ANDROID"],
      notificationToken:["67657575eececc34"]
      })
    }
  )
}
ngOnInit():void { 
}
}