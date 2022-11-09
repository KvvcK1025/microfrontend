import {Component, OnInit} from '@angular/core';
import { AuthLibService } from 'auth-lib';
import * as echarts from 'echarts';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardService } from '../dashboard.service';
import { timeout } from 'rxjs/operators';


@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})
export class DashboardPageComponent implements OnInit {
  private corsHeaders: any;
  private root : any;
  public chart: any;
  rows:any = [];
  result: any = [];
  input: any = {"sql": "select * from  Ticket"};
 
  constructor(private service: AuthLibService,private http: HttpClient,
    private _dashboardService: DashboardService
    ){
    console.log('User Name', this.service.user);
    this.root = 'http://vtewstomm04:8099/query/sql';
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    });
  }
  
  
  showWidget = false;

  ctype : string
  todo = ['Bar', 'Line', 'Pie', 'Time-Series','Country-Map',];

  done = ['Country-Map', 'NUmber-Series', 'Doughnut'];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

   async ngOnInit(){
   
    (await this._dashboardService.getDashboardList(this.input)).subscribe(
      (res:any)=>{
      //   this.rows = Object.assign([], res.resultTable);
      //  this.result.push(this.rows.rows)  ;
      //   console.table(this.result);
      this.result = res.resultTable;
      console.log('result',this.result);
      }
    );
    
    setTimeout(() => {
      console.log(this.rows.rows)   
            }, 3000);
   
    type EChartsOption = echarts.EChartsOption
    
    var chartDom = document.getElementById('myChart');
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;
    option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      
      option && myChart.setOption(option);

     
    }
    chartOption() {
      
        if(this.ctype == 'bar'){
          type EChartsOption = echarts.EChartsOption
          var chartDom = document.getElementById('myChart');
          var myChart = echarts.init(chartDom);
          var option: EChartsOption;
          option = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  data: [120, 200, 150, 80, 70, 110, 130],
                  type: 'bar',
                  showBackground: true,
                  backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                  }
                }
              ]
            };
            
            option && myChart.setOption(option);
        }

        else if (this.ctype == 'line'){
          type EChartsOption = echarts.EChartsOption
          var chartDom = document.getElementById('myChart');
          var myChart = echarts.init(chartDom);
          var option: EChartsOption;
          option = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  data: [120, 200, 150, 80, 70, 110, 130],
                  type: 'line',
                }
              ]
            };
            
            option && myChart.setOption(option);
        }

       
    }
    widgetClick() {
      this.showWidget = !this.showWidget;
    }
      
}