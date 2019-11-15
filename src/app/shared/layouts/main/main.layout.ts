import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalstorageService } from 'src/app/core/localstorage.service';

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar,
    private storage: LocalstorageService) { }

  openSnackBar() {
    // tslint:disable-next-line: no-use-before-declare
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000
    });
    this.clearLocalStorage();
  }

  clearLocalStorage() {
    this.storage.clear();
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

}
@Component({
  selector: 'app-snackbar',
  template: `<div class="snackbar">Refreshing<mat-progress-bar color="warn" mode="indeterminate"></mat-progress-bar></div>`,
  styles: [`
    .snackbar {
      color: warn;
    }
  `],
})
export class SnackBarComponent { }
