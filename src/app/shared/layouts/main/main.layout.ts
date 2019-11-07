import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'main-layout',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.scss']
})
// tslint:disable-next-line: component-class-suffix
export class MainLayout {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

}
