import {Peak} from "./peak";

export class Spectrum {
  mzStart: string;
  mzStop: string;
  spectrumId: string;
  peaks: Peak[];
  xLabel: string;
  yLabel: string;
  xMax: number;
  yMAx: number;
  xMin: number;
  yMin: number;
  data: number[];

}
