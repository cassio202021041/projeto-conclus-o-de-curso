import { OnInit, Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrl: './header1.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }
}
