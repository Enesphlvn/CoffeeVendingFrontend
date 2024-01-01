import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css',
})
export class CommunicationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
