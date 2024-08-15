import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonDirective } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { NgIf } from "@angular/common";
import { ConfirmationService, MessageService } from "primeng/api";
import { Ripple } from "primeng/ripple";
import { Table, TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ToastModule } from "primeng/toast";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { User } from "../../../../core/models/user.model";
import { UserService } from "../../../../core/services/user.service";

@Component({
  selector: 'app-d-user',
  standalone: true,
  imports: [
    ButtonDirective,
    ConfirmDialogModule,
    DropdownModule,
    InputTextModule,
    NgIf,
    Ripple,
    TableModule,
    TagModule,
    ToastModule,
    FormsModule
  ],
  providers: [MessageService, ConfirmationService],
  templateUrl: './d-user.component.html',
  styleUrls: ['./d-user.component.css']
})
export class DUserComponent implements OnInit {
  @ViewChild('dt') dt!: Table;
  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  onNumber(): number {
    return this.users.length;
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  navigateToCreate(): void {
    this.router.navigate(['/register']);
  }
}
