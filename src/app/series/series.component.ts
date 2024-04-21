import { Component, OnInit } from '@angular/core';
import { Series } from './series';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Series> = [];
  promedio: number = 0;
  

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
      console.log(this.series)
    });
  }
  promedioSeries(){
    let p:number=0;
    let i:number = 0;
    while(i<this.series.length){
      p += this.series[i].seasons;
      i++;
    }
    p/=this.series.length;
    return p;
  }

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.getSeries();
  }

}
