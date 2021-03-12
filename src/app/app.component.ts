import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  objDataUser = {
    login: "",
    password: "",
    email: ""
  };

  userDataArray = [];
  newUserDataArray = [];
  indexCount = 0;

  indexEdit = 0;

  isChangeButton: boolean = true;

  addButton(){
    this.userDataArray.push(JSON.stringify(this.objDataUser));
    this.newUserDataArray.push(JSON.parse(this.userDataArray[this.indexCount]));
    this.indexCount++;
    this.objDataUser.login = "";
    this.objDataUser.password = "";
    this.objDataUser.email = "";
    // console.log(this.userDataArray);
    // console.log(this.objDataUser);
    // console.log(this.newUserDataArray);
  }


  deleteUser(index){
    this.newUserDataArray.splice(index, 1);
    console.log(this.userDataArray);
  }

  editUser(index){
    this.isChangeButton = false;
    // this.objDataUser.login = this.userDataArray[index].login;
    this.objDataUser.login = this.newUserDataArray[index].login;
    this.objDataUser.password = this.newUserDataArray[index].password;
    this.objDataUser.email = this.newUserDataArray[index].email;

    this.indexEdit = index;
  }

  editNewUser(){
    this.isChangeButton = true;

    this.newUserDataArray[this.indexEdit].login = this.objDataUser.login;

    this.objDataUser.login = "";
    this.objDataUser.password = "";
    this.objDataUser.email = "";
    

  }


}
