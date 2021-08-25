import React from "react";

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function Balance(props: any) {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={props.data} margin={{ right: 30 }}>
        <CartesianGrid />
        <XAxis dataKey="actual" interval={"preserveStartEnd"} />
        <YAxis></YAxis>
        <Legend />
        <Line dataKey="actual" stroke="black" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
