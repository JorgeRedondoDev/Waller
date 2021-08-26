import React from "react";

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function Balance(props: any) {
  return (
    <ResponsiveContainer width="100%" aspect={4}>
      <LineChart data={props.data}>
        <CartesianGrid />
        <XAxis dataKey="actual" interval={"preserveStartEnd"} />
        <YAxis />
        <Legend />
        <Line dataKey="actual" stroke="black" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
