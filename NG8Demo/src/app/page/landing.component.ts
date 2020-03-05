import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { DropdownService } from '../plugins/dropdown/dropdown.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy, AfterViewInit {
  

   serviceSubscription: any;
  constructor(private dropDownService: DropdownService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.serviceSubscription = this.dropDownService.$selectionValue.subscribe(x=>{
      this.router.navigate([x.value]);
    });
  }

  ngOnDestroy(): void {
    this.serviceSubscription.unsubscribe();
  }

}
