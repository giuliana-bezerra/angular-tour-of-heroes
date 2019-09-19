import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: {}[] = [];

  add(message: {}) {
    this.messages.push(message);
    setTimeout(() => this.clear(), 3000);
  }

  clear() {
    this.messages = [];
  }
}
