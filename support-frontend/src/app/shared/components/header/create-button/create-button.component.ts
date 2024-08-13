import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-create-button',
  standalone: true,
  imports: [],
  templateUrl: './create-button.component.html',
  styleUrl: './create-button.component.css'
})
export class CreateButtonComponent {
  @Input() iconSrc: string = 'https://cdn.builder.io/api/v1/image/assets/TEMP/1bac1d62cfe8c41f9048345c45f04694ae346b0e86bf3ddbeb9a99f4bc92cb29?placeholderIfAbsent=true&apiKey=636115f9631f48bf97a296bc25ce3201';
  @Input() iconAlt: string = 'Create icon';
  @Input() buttonText: string = 'CREATE NEW';
}
