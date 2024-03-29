import { XAXISRANGE } from "./constants";
import moment from "moment";
const chartOptions = {
  chart: {
    id: "realtime",
    height: 450,
    type: "line",
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 1000,
      },
    },
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "CPU load average",
    align: "left",
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: "categories",
    range: XAXISRANGE,
    labels: {
      formatter: function (value, timestamp, index) {
        return moment(new Date(timestamp)).format("LTS");
      },
    },
  },
  yaxis: {
    max: 1,
    min: 0,
  },
  legend: {
    show: false,
  },
  dropShadow: {
    enabled: true,
    top: 0,
    left: 0,
    blur: 3,
    opacity: 0.5,
  },
  annotations: {
    xaxis: [],
  },
};
export default chartOptions;
