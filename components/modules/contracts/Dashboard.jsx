"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Sample Data
const contractStatusData = [
  { name: "Draft", value: 20, color: "#FFCE56" },
  { name: "Effective", value: 7, color: "#36A2EB" },
  { name: "Ended", value: 5, color: "#FF6384" },
  { name: "Terminated", value: 8, color: "#FF9F40" },
];

const contractsTypeData = [
  { type: "Sales", value: 14, color: "#6A5ACD" },
  { type: "Training", value: 12, color: "#7CFC00" },
  { type: "Research", value: 10, color: "#FFD700" },
  { type: "Consortium", value: 8, color: "#FF4500" },
];

const expiryReviewData = [
  { month: "February", review: 5, expiry: 3 },
  { month: "March", review: 10, expiry: 8 },
  { month: "April", review: 15, expiry: 12 },
  { month: "May", review: 20, expiry: 17 },
  { month: "June", review: 10, expiry: 15 },
  { month: "July", review: 15, expiry: 12 },
  { month: "August", review: 10, expiry: 18 },
];

const consultants = [
  { name: "@iLabAfrica", quantity: 30 },
  { name: "SBC", quantity: 60 },
  { name: "KPMG AUDIT", quantity: 1 },
  { name: "JOHN DOE", quantity: 3 },
];

const Contracts = () => {
  const router = useRouter();

  return (
    <div className="space-y-6 mt-5">
      {/* Tabs and Cards Section */}
      
      <div>
      <Button onClick={() => router.push("/contract/ContractList.jsx")} 
        className="justify-end bg-[#b4d304] m-5">All Contracts</Button>
        </div>
        
      {/* Contract Search */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">Contract Search</h3>
          <div className="flex items-center space-x-2">
            <Input placeholder="Search here..." className="flex-grow" />
            <Button className="bg-green-500 text-white px-4">Search</Button>
          </div>
        </Card>

        {/* Contracts Status */}
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-4">Contracts Status</h3>
          <PieChart width={300} height={250}>
            <Pie
              data={contractStatusData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={5}
              label
            >
              {contractStatusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Card>
      </div>

      {/* Contracts by Consultants */}
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Contracts by Consultants</h3>
        <table className="w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Consultant</th>
              <th className="p-2 text-left">Quantity</th>
              <th className="p-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {consultants.map((consultant, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{consultant.name}</td>
                <td className="p-2">{consultant.quantity}</td>
                <td className="p-2">
                  <Button className="bg-green-500 text-white px-4">View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <div className="flex flex-wrap gap-4">
  {/* Area Chart for Approaching Expiry */}
  <Card className="p-4 flex-1 min-w-[600px]">
    <h3 className="text-lg font-semibold mb-4">
      Contracts Approaching Expiry and Review (Date by Month)
    </h3>
    <AreaChart
      width={600}
      height={250}
      data={expiryReviewData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorReview" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorExpiry" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="month" />
      <YAxis label={{ value: "Volume", angle: -90, position: "insideLeft" }} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="review"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorReview)"
      />
      <Area
        type="monotone"
        dataKey="expiry"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorExpiry)"
      />
    </AreaChart>
  </Card>

  {/* Bar Chart for Contracts Type */}
  <Card className="p-4 flex-1 min-w-[600px]">
    <h3 className="text-lg font-semibold mb-4">Contracts Type</h3>
    <BarChart
      width={700}
      height={300}
      data={contractsTypeData}
      layout="vertical"
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20,
      }}  
    >
      <XAxis type="number" />
      <YAxis
        dataKey="type"
        type="category"
        axisLine={false}
        tickLine={false}
        tick={{
          fontSize: 12, 
        }}
      />
      <Tooltip />
      <Bar
        dataKey="value"
        radius={[5, 5, 0, 0]}
        label={{ position: "insideRight" }}
      >
        {contractsTypeData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
  </Card>
</div>

    </div>
  );
};

export default Contracts;
