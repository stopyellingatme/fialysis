import React from 'react';
import { Bar } from 'nivo';

const BarChart = (props) => (
    <Bar
      data={props.data}
      keys={[
          "hot dog",
          "burger",
          "sandwich",
          "kebab",
          "fries",
          "donut"
      ]}
      indexBy="country"
      margin={{
          "top": 50,
          "right": 60,
          "bottom": 50,
          "left": 60
      }}
      padding={0.2}
      innerPadding={0}
      minValue="auto"
      maxValue="auto"
      groupMode="stacked"
      layout="vertical"
      reverse={false}
      colors="nivo"
      colorBy="id"
      defs={[
          {
              "id": "dots",
              "type": "patternDots",
              "background": "inherit",
              "color": "#38bcb2",
              "size": 4,
              "padding": 1,
              "stagger": true
          },
          {
              "id": "lines",
              "type": "patternLines",
              "background": "inherit",
              "color": "#eed312",
              "rotation": -45,
              "lineWidth": 6,
              "spacing": 10
          }
      ]}
      fill={[
        {
            "match": {
                "id": "fries"
            },
            "id": "dots"
        },
        {
            "match": {
                "id": "sandwich"
            },
            "id": "lines"
        }
      ]}  
      borderRadius={0}
      borderWidth={0}
      borderColor="inherit:darker(1.6)"
      axisBottom={{
          "orient": "bottom",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "country",
          "legendPosition": "center",
          "legendOffset": 36,
      }}
      axisLeft={{
          "orient": "left",
          "tickSize": 5,
          "tickPadding": 5,
          "tickRotation": 0,
          "legend": "food",
          "legendPosition": "center",
          "legendOffset": -40
      }}
      enableGridX={false}
      enableGridY={true}
      enableLabel={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="inherit:darker(1.6)"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={true}
      width={1500}
      height={500}
    />
);

export default BarChart;
