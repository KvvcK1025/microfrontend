import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Inject, OnDestroy,  QueryList, ViewChild, ViewChildren} from '@angular/core';
import { AuthLibService } from 'auth-lib';
import {Router} from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';
import {CdkDragDrop, moveItemInArray, transferArrayItem , CdkDropListGroup , copyArrayItem} from '@angular/cdk/drag-drop';
import { countriesPopulation, countriesPopulationByYear } from './countries-population-data';
import { KtdGridComponent, KtdGridLayout, ktdTrackById } from '@katoid/angular-grid-layout';
import { fromEvent, merge, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { AreaChartStackedComponent } from '@swimlane/ngx-charts';
import {
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-dashboardmenu',
    templateUrl: './dashboardmenu.component.html',
    styleUrls: ['./dashboardmenu.component.css'],
   
  })
   
  export class DashboardMenuComponent implements OnInit ,OnDestroy{
    [x: string]: any;
    todo = ['Bar', 'Line', 'Pie', 'Time-Series'];
    hello =['abc','xyz']
    done = ['Country-Map', 'NUmber-Series', 'Doughnut'];
   
    dragPosition = {x: 0, y: 0};
    public style: object = {};
    showGuidance  = false
   
   
    constructor(private service: AuthLibService, http: HttpClient,private router: Router,@Inject(DOCUMENT) public document: Document,
    private dialog : MatDialog) {
      this.service.login('Max', null);
    }
    public cardListOne =[{}];
    public cardList = [
      { title: 'Card 1', cols: 2, rows: 2 , color: 'Tomato' },
      { title: 'Card 2', cols: 2, rows: 2 , color: 'Orange' },
      { title: 'Card 3', cols: 2, rows: 2 , color: 'DodgerBlue' },
      { title: 'Card 4', cols: 2, rows: 2 , color: 'MediumSeaGreen' },
      { title: 'Card 5', cols: 1, rows: 1 , color: 'Gray' },
      { title: 'Card 6', cols: 2, rows: 1 , color: 'SlateBlue' },
      { title: 'Card 7', cols: 1, rows: 1 , color: 'Violet' },
      { title: 'Card 8', cols: 1, rows: 1 , color: 'LightGray' },
      { title: 'Card 9', cols: 1, rows: 2 , color: 'PINK' },
      { title: 'Card 10', cols: 2, rows: 1 , color: 'GREENYELLOW' },
      { title: 'Card 11', cols: 1, rows: 1 , color: 'DARKTURQUOISE' },
      { title: 'Card 12', cols: 2, rows: 1 , color: 'BURLYWOOD' },
      { title: 'Card 13', cols: 2, rows: 2 , color: 'GOLD' },
      { title: 'Card 14', cols: 1, rows: 1 , color: 'LIGHTSTEELBLUE' },
      { title: 'Card 15', cols: 1, rows: 1 , color: 'SALMON' },
      ];
      @ViewChild(KtdGridComponent, {static: true}) grid: KtdGridComponent;
    @ViewChildren(AreaChartStackedComponent) areaCharts: QueryList<AreaChartStackedComponent>;

    trackById = ktdTrackById;
    cols = 12;
    rowHeight = 50;
    compactType: 'vertical' | 'horizontal' | null = 'vertical';
    layout: KtdGridLayout = [
        {id: '0', x: 0, y: 0, w: 5.5, h: 7, minW: 4, minH: 6},
        {id: '1', x: 6, y: 0, w: 5.5, h: 7, minW: 2, minH: 6},
        {id: '2', x: 0, y: 0, w: 5.5, h: 7, minW: 4, minH: 6, maxW: 8, maxH: 14},
        {id: '3', x: 6, y: 0, w: 5.5, h: 7, minH: 6},
        {id: '4', x: 8, y: 5, w: 4, h: 10, minH: 6, maxH: 12},
        {id: '5', x: 7, y: 0, w: 4, h: 7, minW: 2, minH: 6},
    ];

    layoutSizes: {[id: string]: [number, number]} = {};
    countriesPopulation: any[] = countriesPopulation;
      countriesPopulationByYear: any[] = countriesPopulationByYear;

    // options
    legend: boolean = true;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Tickets';
    yAxisLabel: string = 'Count';
    timeline: boolean = true;


    colorScheme = {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  colorScheme2 = {
      domain: ['#4e79a7', '#f28e2c', '#e15759', '#76b7b2', '#59a14f', '#edc949', '#af7aa1']
  };

  colorSchemeGradientLinear = {
      domain: ['#4e79a7', '#f28e2c', '#e15759']
  };


  private resizeSubscription: Subscription;

openModal() {
  this.dialog.open(ModalComponent, {data :{
   xLabel : this.xAxisLabel,
   yLabel : this.yAxisLabel
  }})
}


    onClick() {
     
      this.showGuidance = !this.showGuidance;
    }
    
    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }

    delete(index: any) {
      this.cardList.splice(index,1);
    }

    ondrop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.cardList, event.previousIndex, event.currentIndex);
    }

    validate(event: ResizeEvent): boolean {
      const MIN_DIMENSIONS_PX: number = 50;
      if (
        event.rectangle.width &&
        event.rectangle.height &&
        (event.rectangle.width < MIN_DIMENSIONS_PX ||
          event.rectangle.height < MIN_DIMENSIONS_PX)
      ) {
        return false;
      }
      return true;
    }
  
    onResizeEnd(event: ResizeEvent): void {
      this.style = {
        position: 'fixed',
        left: `${event.rectangle.left}px`,
        top: `${event.rectangle.top}px`,
        width: `${event.rectangle.width}px`,
        height: `${event.rectangle.height}px`,
      };
    }
    ngOnInit(): void {

      this.resizeSubscription = merge(
        fromEvent(window, 'resize'),
        fromEvent(window, 'orientationchange')
    ).pipe(
        debounceTime(50)
    ).subscribe(() => {
        this.grid.resize();
        this.calculateLayoutSizes();
    });
      const button = document.getElementById('nav');

      button?.addEventListener('click', function handleClick(event) { 
         console.log('button clicked');  
         console.log(event);  
         console.log(event.target);
        });
        // var content = document.getElementById("navcontent").nextElementSibling.innerHTML;
        // if (content.  style.display === "block") {
        //   content.style.display = "none";
        // } else {
        //   content.style.display = "block";
        // }
    }
    ngOnDestroy() {
      this.resizeSubscription.unsubscribe();
  }

  getView(gridItemId: string, grid: KtdGridComponent): [number, number] {
      const gridItemRenderData = grid.getItemRenderData(gridItemId);
      return [
          gridItemRenderData.width,
          gridItemRenderData.height
      ];
  }

  onLayoutUpdated(layout: KtdGridLayout) {
      this.layout = layout;
      this.calculateLayoutSizes();
  }

  labelFormatting(c) {
      return `${(c.label)} Population`;
  }

  onSelect(id: string, data): void {
      console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(id: string, data): void {
      console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(id: string, data): void {
      console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  /**
   * Calculates and sets the property 'this.layoutSizes' with the [width, height] of every item.
   * This is needed to set manually the [width, height] for every grid item that is a chart.
   */
  private calculateLayoutSizes() {
      const gridItemsRenderData = this.grid.getItemsRenderData();
      this.layoutSizes =
          Object.keys(gridItemsRenderData)
              .reduce((acc, cur) => ({
                  ...acc,
                  [cur]: [gridItemsRenderData[cur].width, gridItemsRenderData[cur].height]
              }), {});
  }

    
}