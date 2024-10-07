import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../ui/card/card.component';
import { User } from './user.type';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() selectUser = new EventEmitter<string>();

  get avatarPath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
