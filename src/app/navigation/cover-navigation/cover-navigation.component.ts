import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-cover-navigation',
  templateUrl: './cover-navigation.component.html',
  styleUrls: ['./cover-navigation.component.scss']
})
export class CoverNavigationComponent implements OnInit {

  open:boolean = false;
  timeoutOpen:boolean = false;
  openClass = 'close';

  activeRoute:string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  
    this.router.events.subscribe((val) => {

      if(val instanceof NavigationEnd)
      {
        this.activeRoute = val.urlAfterRedirects;
      }
      
    });
  }

  openClose(event)
  {
    this.open = event;
    
    if(this.open)
    {
      this.timeoutOpen = this.open;
      this.changeBodyClass()
      setTimeout(()=>{
        this.openClass == "show"? this.openClass = "close": this.openClass = "show"
      }, 500)
      
    }
    else
    {

      this.openClass != "close"? this.openClass = "close": this.openClass = "show"
      setTimeout(()=>{
        this.timeoutOpen = this.open
        this.changeBodyClass()
      }, 500)
      
    }
  }

  closeNavigation()
  {
    this.openClose(false)
  }

  changeBodyClass() 
  {
    const bodyElement = document.body;

    if(this.open)
    {
      bodyElement.classList.add("open");
    }
    else
    {
      bodyElement.classList.remove("open");
    }
  }

  isHome(navUrl:string)
  {
    navUrl = navUrl.split('/').join('')
    if(navUrl.length < 2)
    {      
      return this.openClass +' current'
    }
    else if(this.activeRoute.includes(navUrl))
    {
      return this.openClass +' current'
    }
    else
    {
      return this.openClass;
    } 
  }

}
