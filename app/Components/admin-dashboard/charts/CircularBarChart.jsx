import React from "react";
import ReactECharts from "echarts-for-react";

const CircularBarChart = () => {
  const option = {
    title: {
    //   text: "Platform Engagement (Circular View)",
      left: "center",
    },

    polar: {
      radius: [30, "85%"],
    },

    angleAxis: {
      max: 13000, // based on your max value (users)
      startAngle: 90,
    },

    radiusAxis: {
      type: "category",
      data: ["Registered Users", "Booth Bookings", "Active Events"],
    },

    tooltip: {
      trigger: "item",
      left:true
    },

    series: [
      {
        type: "bar",
        data: [12450, 342, 6],
        coordinateSystem: "polar",

        label: {
          show: true,
          position: "right",
          formatter: "{b}: {c}",
        },

        itemStyle: {
          color: (params) => {
            const colors = ["#03A9F4", "#8BC34A", "#ff5722"];
            return colors[params.dataIndex];
          },
        },

        roundCap: false,
        barWidth: 30,
      },
    ],
  };

  return (
    <div className="w-full  h-[280px] mx-auto p-4 bg-white rounded-lg shadow-sm">
      <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default CircularBarChart;