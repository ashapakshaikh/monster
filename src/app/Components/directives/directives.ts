import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
isLogin =true;
}
