import React from "react";
import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const option = {
    title: {
      // text: "Platform Engagement Overview",
      left: "center",
    },

    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)", // name : value (%)
    },

    legend: {
      orient: "horizontal",
      bottom: 0,
    },

    series: [
      {
        name: "Current Performance",
        type: "pie",
        radius: "50%", // change to ["40%", "70%"] for donut
        data: [
          { value: 12450, name: "Registered Users" },
          { value: 342, name: "Booth Bookings" },
          { value: 6, name: "Active Events" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],

    color: ["#03A9F4", "#8BC34A", "#ff5722"], // match your bar colors
  };

  return (
    <div className="w-full h-[280px] mx-auto p-4 bg-white rounded-lg shadow-sm">
       <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default PieChart;