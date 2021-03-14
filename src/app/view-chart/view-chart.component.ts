import { Component, OnInit } from '@angular/core';
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
  message: string;
  error: boolean;


  constructor() { }

  ngOnInit() {
    this.title = 'Spectra';
    this.type = 'LineChart';
    this.data = [['0', 0]];
    this.columnNames = ['Spectra', 'Peaks'];
    this.error = false;
    this.message = "";
  }

  getJsonData(){
    if(this.jsonData != undefined){
      this.message = "";
      this.error = false;

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
      if(this.jsonData.peaks == undefined && this.jsonData.data == undefined) {
        this.message = "Uploaded JSON file is not supported!";
        this.error = true;
      }
    }else{
      this.message = "Please upload your JSON file!";
      this.error = true;
    }
  }

  drawChart(title, type, haxis, vaxis) {

    this.title = title;
    this.type = type;
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

  openFile(event) {
    var text;
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        text = reader.result;
        console.log("text"+text)
        try{
          this.jsonData = JSON.parse(text);
          this.message = "";
          this.error = false;
        }catch (e) {
          console.log("Uploaded file is not in JSON format");
          this.message = "Uploaded file is not in JSON format!";
          this.error = true;
        }
      }
      reader.readAsText(input.files[index]);
    }

  }

}

