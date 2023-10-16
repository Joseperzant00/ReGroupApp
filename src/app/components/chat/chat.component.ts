import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: any[] = []; // Aquí almacenaremos los mensajes del chat
  newMessage: string = ''; // Esta variable guarda el nuevo mensaje

  constructor() { }

  ngOnInit() {
    // Simulación de mensajes de chat
    this.messages = [
      { text: 'Hola', sender: 'Usuario 1' },
      { text: 'Hola, ¿cómo estás?', sender: 'Usuario 2' },
      { text: 'Bien, gracias', sender: 'Usuario 1' },
    ];
  }
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, sender: 'Tú' });
      this.newMessage = ''; // Limpiamos el campo de entrada
    }
  }
}
