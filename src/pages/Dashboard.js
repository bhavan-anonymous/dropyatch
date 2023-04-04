import React, { useMemo, useState } from "react";
import "./dashboard.scss";
import data from "../constants/dashboard.json";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { format, isAfter, isBefore } from "date-fns";
export const Dashboard = () => {
  const [from, setFrom] = useState(new Date(data[0].date));
  const [to, setTo] = useState(new Date(data[data.length - 1].date));

  const chartData = useMemo(
    () =>
      data
        .filter(
          (day) =>
            isAfter(new Date(day.date), from) &&
            isBefore(new Date(day.date), to)
        )
        .map((day) => ({
          date: day.date,
          clicks: day.clicks,
          impressions: day.impressions,
        })),
    [data, from, to]
  );

  const totalClicks = chartData.reduce((acc, curr) => acc + curr.clicks, 0);
  const totalImpressions = chartData.reduce(
    (acc, curr) => acc + curr.impressions,
    0
  );

  return (
    <div className="dashboard">
      <div className="dashboard__filters">
        <DateRangePicker
          onChange={(range) => {
            debugger;
            if (range) {
              setFrom(range[0]);
              setTo(range[1]);
            } else {
              // RESET to the range available , otherwise the ui will throw
              setFrom(new Date(data[0].date));
              setTo(new Date(data[data.length - 1].date));
            }
          }}
          value={[from, to]}
          shouldDisableDate={(date, selectedDate, selectedDone, target) => {
            const minDate = new Date(data[0].date);
            const maxDate = new Date(data[data.length - 1].date);
            debugger;
            if (
              isAfter(date, new Date(data[data.length - 1].date)) ||
              isBefore(date, new Date(data[0].date))
            ) {
              return true;
            }
          }}
        />
      </div>
      <div className="dashboard__analytics">
        <div className="dashboard__card">
          <p>Total Clicks</p>
          <h3>{new Intl.NumberFormat("en").format(totalClicks)}</h3>
        </div>
        <div className="dashboard__card">
          <p>Total impressions</p>
          <h3>{new Intl.NumberFormat("en").format(totalImpressions)}</h3>
        </div>
      </div>
      <LineChart
        width={1200}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          type="monotone"
          dataKey="impressions"
          stroke="#8884d8"
          dot={false}
        />
        <Line type="monotone" dataKey="clicks" stroke="green" dot={false} />

        <CartesianGrid stroke="#eaeaea" strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip
          formatter={(value) => new Intl.NumberFormat("en").format(value)}
        />
      </LineChart>
    </div>
  );
};
