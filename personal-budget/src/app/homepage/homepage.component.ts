import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';


@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource1 = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#008000',
                '#ff0000',
                '#808080',
                '#E6E6FA',
                '#FF00FF',
                '#ADD8E6',
                '#A52A2A'
            ]
        }
    ],
    labels: []
};


  constructor(private http: HttpClient) {  }



  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      console.log(res);
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource1.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource1.labels[i] = res.myBudget[i].title;
        this.createChart();

      }

    });

  }

  createChart() {
    var ctx = document.getElementById('myChart') as HTMLCanvasElement;
    console.log(ctx);
    var myPieChart = new Chart(ctx, {
        type: 'pie',
      data: this.dataSource1
    });
  }
}
