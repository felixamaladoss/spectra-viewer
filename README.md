## Spectra Viewer

A Web application to visualise the chart based on submitted data which has spectrum structure. 
This is angular application implemented using Angular-Google-Charts library.
https://github.com/FERNman/angular-google-charts

## Requirements
- Node.js v12.13.0
- npm v6.12.0
- Angular CLI: 8.3.21

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Spectra Viewer accepts data structure as a JSON format. Now it supports two keys for data points:  data , peaks.
Both are arrays.  Peaks should have two data points: -  intensity, mz
Data should have single data point.

For example: 
```
"peaks": [
    {
      "intensity": 2.320237,
      "mz": 51.819397
    },
    {
      "intensity": 2.952204,
      "mz": 57.748032
    } ]
	
"data”: [-11066.0, -10363.0, -8636.0]
```

Find Sample JSON files on location: -  e2e/src/

Upload JSON text file from local machine through File uploader & click  to view chart.


