import React from 'react';
import ChartBar from './ChartBar';
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoints) => {
    dataPoints.value;
  });
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.id}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};
export default Chart;