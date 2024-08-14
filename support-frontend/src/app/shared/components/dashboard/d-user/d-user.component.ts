import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-d-user',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './d-user.component.html',
  styleUrl: './d-user.component.css'
})
export class DUserComponent {
  customers: Customer[] = [
    {
      name: "John Hill",
      email: "ryoung@yahoo.com",
      phone: "(717) 817-8593",
      tags: ["Lead", "Long-term"],
      lastContacted: "Jul 22, 2022"
    }
  ];
}

interface Customer {
  name: string;
  email: string;
  phone: string;
  tags: string[];
  lastContacted: string;
}

