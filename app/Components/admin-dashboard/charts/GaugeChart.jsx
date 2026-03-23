import React from "react";
import ReactECharts from "echarts-for-react";

const GaugeChart = () => {
 const option = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
    textStyle: {
      fontSize: 10, //  tooltip font
    },
  },
  series: [
    {
      name: "Engagement Score",
      type: "gauge",
      min: 0,
      max: 100,
      detail: {
        formatter: "{value}%",
        fontSize:20
      },
       title: {
        fontSize: 12, 
      },
      data: [
        {
          value: 15, // example %
          name: "Score",
        },
      ],
    },
  ],
};

  return (
    <div className="w-full h-[280px] mx-auto p-4 bg-white rounded-lg shadow-sm">
      <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default GaugeChart;