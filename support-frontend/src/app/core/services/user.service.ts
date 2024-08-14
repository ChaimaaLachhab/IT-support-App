import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipment} from "../models/equipment.model";
import {User} from "../models/user.model";


@Injectable({
  providedIn:'root'
})

export class UserService{
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/getAll`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/item/${userId}`);
  }


}
