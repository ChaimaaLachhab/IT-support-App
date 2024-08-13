import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  @Input() avatarSrc: string = 'https://cdn.builder.io/api/v1/image/assets/TEMP/4cc22389a868f9000896339398446aeee1eec240ce81c69482963668c330d5b3?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201';
  @Input() avatarAlt: string = 'User avatar';
  @Input() nameSrc: string = 'https://cdn.builder.io/api/v1/image/assets/TEMP/9897d12c08cf966bdd34e813ebe5c59f94d75f2740d69fe3b2de36969d971bb1?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201';
  @Input() nameAlt: string = 'User name';
  @Input() statusSrc: string = 'https://cdn.builder.io/api/v1/image/assets/TEMP/84178da12f7779813293da3cb7aee4daf630ac0c01aa2a019471695262b120f9?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201';
  @Input() statusAlt: string = 'User status';
  @Input() actionSrc: string = 'https://cdn.builder.io/api/v1/image/assets/TEMP/411333dce038b6303fc1dc41c929bccf624507db214385d0895255cb80b2acb0?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201';
  @Input() actionAlt: string = 'User action';
}
