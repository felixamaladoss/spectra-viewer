import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Welcome';

  constructor( private titleService: Title,
               private router: Router,
               private activatedRoute: ActivatedRoute){

  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  async ngOnInit() {

    this.title = this.titleService.getTitle();


    this.router
      .events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if (child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }
        return this.title;
      })
    ).subscribe((ttl: string) => {
      this.titleService.setTitle(ttl);
      this.title = this.titleService.getTitle();
    });
  }
}
