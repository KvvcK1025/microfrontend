import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import * as echarts from 'echarts';
import { element } from 'protractor';
import { TicketService } from './ticket.service';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  private corsHeaders: any;
  private root : any;
  public chart: any;
  row:any = [];
  rows:any = [];
  result: any = [];
  input: any = {"sql": "select AssignedTo,Priority from  Ticket"};
  x_row: any = [];
  y_row: any = [];
 
  constructor(private service: AuthLibService,private http: HttpClient,
    private _ticketService: TicketService
    
    ){}
  
  

  ctype : string

   ngOnInit(){
   
    this.getData();
    
    }
    async getData(){
      (await (this._ticketService.getTicketList(this.input))).subscribe(
        (res:any)=>{
        //   this.rows = Object.assign([], res.resultTable);
        //  this.result.push(this.rows.rows)  ;
        //   console.table(this.result);
        this.result = res.resultTable.rows;
        // console.log(this.result);
        this.result.map(element => {
            this.row.push(element);
            this.x_row.push(element[0]);
            this.y_row.push(element[1]);
            // this.x_row.push(element[i][4]);
            // this.y_row.push(element[i][2]);
        });
        
        console.log(this.row);
        console.log(this.x_row);
        console.log(this.y_row);
        console.log('result',this.result);
        }
      );
      
      setTimeout(() => {  
        // this.result.map(element => {
        //   element.map(data => {
        //     this.x_row.push(data[4]);
        //     this.y_row.push(data[2]);
        //   });
        // });
        console.log(this.result.rows)
        
        type EChartsOption = echarts.EChartsOption
      
      var chartDom = document.getElementById('myChart');
      var myChart = echarts.init(chartDom);
      var option: EChartsOption;
      option = {
          xAxis: {
            type: 'category',
            data: this.x_row
          },
          yAxis: {
            type: 'category'
          },
          series: [
            {
              data: this.y_row,
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
            }
          ]
        };
        
        option && myChart.setOption(option);
        // var chartDom1 = document.getElementById('main');
        // var myChart1 = echarts.init(chartDom1);
        // var option1;
        // option1 = {
        //   title: {
        //     text: 'Referer of a Website',
        //     subtext: 'Fake Data',
        //     left: 'center'
        //   },
        //   tooltip: {
        //     trigger: 'item'
        //   },
        //   legend: {
        //     orient: 'vertical',
        //     left: 'left'
        //   },
        //   series: [
        //     {
        //       name: 'Access From',
        //       type: 'pie',
        //       radius: '50%',
        //       data: [
        //         { value: 1048, name: 'Search Engine' },
        //         { value: 735, name: 'Direct' },
        //         { value: 580, name: 'Email' },
        //         { value: 484, name: 'Union Ads' },
        //         { value: 300, name: 'Video Ads' }
        //       ],
        //       emphasis: {
        //         itemStyle: {
        //           shadowBlur: 10,
        //           shadowOffsetX: 0,
        //           shadowColor: 'rgba(0, 0, 0, 0.5)'
        //         }
        //       }
        //     }
        //   ]
        // };
        
        // option1 && myChart1.setOption(option1);
       
              }, 3000);
     
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
                data: this.x_row
              },
              yAxis: {
                type: 'category'
              },
              series: [
                {
                  data: this.y_row,
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
                data: this.x_row
              },
              yAxis: {
                type: 'category'
              },
              series: [
                {
                  data: this.y_row,
                  type: 'line',
                }
              ]
            };
            
            option && myChart.setOption(option);
        }

       
    }

}
