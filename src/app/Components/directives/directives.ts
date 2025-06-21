import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
isLogin =true;
}
