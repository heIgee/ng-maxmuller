import { Component } from '@angular/core';
import { dummyUsers } from './constants/dummy-users';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { User } from './user/user.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = dummyUsers;
  selectedUser?: User;

  selectUser(id: string) {
    this.selectedUser = this.users.find((u) => u.id === id);
  }
}
