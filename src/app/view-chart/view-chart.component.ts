import { Component, OnInit } from '@angular/core';
import {DataService} from '../_service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Spectrum} from "../_model";

@Component({
  selector: 'app-view-chart',
  templateUrl: './view-chart.component.html',
  styleUrls: ['./view-chart.component.css']
})
export class ViewChartComponent implements OnInit {

  title: string;
  type: string;
  data: object[];
  chartData: object[];
  columnNames: string[];
  options: object;
  width = 900;
  height = 700;
  jsonData: Spectrum;
  myForm: FormGroup;


  constructor(private dataService: DataService,
              private fb: FormBuilder) { }

  ngOnInit() {
    //this.drawChart1();
   // this.drawChart();
    this.title = 'Spectra';
    this.type = 'LineChart';
    this.data = [['0', 0]];
    this.myForm = this.fb.group({
      jsondata: [''],
    });
    this.columnNames = ['Spectra', 'Peaks'];
  }

  getJsonData(){

    var jsonString = this.myForm.get('jsondata').value;
    this.jsonData = JSON.parse(jsonString);
    console.log("json data "+this.jsonData.data);
    console.log("json data1 "+this.jsonData.peaks);
    if(this.jsonData.data != undefined){
      this.chartData = [];
      for (let i = 0; i < this.jsonData.data.length; i++) {
        this.chartData.push(['', this.jsonData.data[i]])
      }
      console.log("chartData "+this.chartData);
      this.drawChart('Spectra', 'LineChart', 'ppm', 'Intensity');
    }
    if(this.jsonData.peaks != undefined){
      this.chartData = [];
      for (let i = 0; i < this.jsonData.peaks.length; i++) {
        this.chartData.push([this.jsonData.peaks[i].intensity, this.jsonData.peaks[i].mz])
      }
      console.log("chartData "+this.chartData);
      this.drawChart(this.jsonData.spectrumId, 'ColumnChart', 'mz', 'Intensity');
    }


  }

  drawChart(title, type, haxis, vaxis) {

    this.title = title;
    this.type = type;
    /*this.data = [
      ['-1.2134', -11066.0],
      ['', -10363.0],
      ['', -8636.0],
      ['10.8014', -6605.0],
    ];*/
    this.data = this.chartData;
    this.options = {
      hAxis: {
        title: haxis
      },
      vAxis: {
        title: vaxis
      },
    };
  }

  drawChart1() {

    this.type = 'ColumnChart';
    this.data = [
      [51.819397, 2.320237],
      [57.748032, 2.952204],
      [57.996468, 3.686789],
      [60.081551, 101.576661],
    ];

    this.options = {
      hAxis: {
        title: 'mz'
      },
      vAxis: {
        title: 'Intensity'
      },
    };
  }
}

