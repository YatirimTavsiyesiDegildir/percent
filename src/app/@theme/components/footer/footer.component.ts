import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://github.com/DoguD" target="_blank">DDU</a></b> and <b><a href="https://github.com/Oakknight" target="_blank">Çınar Kızıltepe</a></b> 2020
    </span>
    <div class="socials">
      <a href="https://github.com/DoguD/percent" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
