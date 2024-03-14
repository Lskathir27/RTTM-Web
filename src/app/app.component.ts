import { Component, HostBinding, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { MaterialModule } from '../Shared/Modules/Material/material.module';
import { ApplicationTheme } from './const';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appTheme = ApplicationTheme;
  theme = this.appTheme.DARK;
  showLabel: boolean = false;
  title = 'RealTimeTaskManagement';
  isDarkMode: boolean = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private renderer: Renderer2
  ) {
    matIconRegistry.addSvgIcon(
      'rttm',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/AppIcon/rttm.svg')
    )
  }

  switchTheme() {
    this.handleClassChange()
  }

  handleClassChange() {
    this.isDarkMode ?
      this.renderer.addClass(document.body, this.appTheme.DARK) :
        this.renderer.removeClass(document.body, this.appTheme.DARK);
  }
}
