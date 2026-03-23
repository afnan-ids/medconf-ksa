import React from "react";
import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const option = {
    title: {
      // text: "Platform Engagement Overview",
      left: "center",
    },

    tooltip: {
      trigger: "axis",
    },

    xAxis: {
      type: "category",
      data: ["Registered Users", "Booth Bookings", "Active Events"],
    },

    yAxis: {
      type: "value",
    },

    series: [
      {
        name: "Current Performance",
        type: "bar",
        data: [12450, 342, 6],
        itemStyle: {
          color: (params) => {
            const colors = ["#03A9F4", "#8BC34A", "#ff5722"];
            return colors[params.dataIndex];
          },
          borderRadius: [5, 5, 0, 0],
        },
        barWidth: "40%",
      },
    ],
  };

  return (
    <div className="w-full h-[280px] mx-auto p-4 bg-white rounded-lg shadow-sm">
      <ReactECharts option={option} style={{ height: "310px", width: "100%" }} />
    </div>
  );
};

export default BarChart;