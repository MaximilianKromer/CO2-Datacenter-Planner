import * as React from "react";
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import draggable from "highcharts/modules/draggable-points";

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
  draggable(Highcharts);
}

/* https://api.highcharts.com/highcharts/
 * Chart for inputting data.
 * title: Title of the chart
 * subtitle: Subtitle of the chart (optional)
 * data: Array of data points [13 values, first == last]
 * onChange: function with new data points as argument
 * 
 * TODO: Currently only load in percent values
 */

const InputChart = ({ title, subtitle, data, onChange }) => {
  
  const options = {
    title: {
      text: title ? title : "Auslastung",
    },
    subtitle: {
      text: subtitle ? subtitle : "",
    },
    xAxis: {
      categories: ['0 Uhr', '2 Uhr', '4 Uhr', '6 Uhr', '8 Uhr', '10 Uhr', '12 Uhr', '14 Uhr', '16 Uhr', '18 Uhr', '20 Uhr', '22 Uhr', '24 Uhr'],
      type: 'linear',
    },
    yAxis: {
      title: {
        text: "Auslastung in %",
      },
      min: 0,
      max: 100
    },
    chart: {
      type: 'areaspline' // area, line
    },
    series: [
      {
        dragDrop: {
          draggableY: true,
          dragMinY: 0,
          dragMaxY: 100,
          dragPrecisionY: 1,
        },
        data: data,
        name: 'Auslastung',
        cursor: 'ns-resize',
        lineWidth: 3,
        color: '#3EB6E6',
      }
    ],
    plotOptions: {
      series: {
        point: {
          events: {
            drag: function () {
              if (this.x === 0 || this.x === 12) {
                this.series.data[0].update({y: this.y});
                this.series.data[12].update({y: this.y});
              }
            },
            drop: function () {
              if (this.x === 0 || this.x === 12) {
                this.series.data[0].update({y: this.y});
                this.series.data[12].update({y: this.y});
              }
              onChange(this.series.data.map((point) => point.y));
            }
          }
        },
        label: {
          connectorAllowed: false
        },
        pointStart: 0
      }
    },
    legend: {
      enabled: false
    },
  };

  return (
    <div className="mb-3, mt-3">
      <HighchartsReact
        constructorType={"chart"}
        highcharts={Highcharts}
        options={options}/>
    </div>
    );
};

export default InputChart;
