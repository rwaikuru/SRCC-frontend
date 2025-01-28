"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const NewContract = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFileUpload = (event) => {
    console.log(event.target.files);
  };

  return (
    <Card>
        <CardHeader >
            <CardContent>
            <div className="p-5 grid grid-cols-2 gap-4">
      <h1 className="text-xl font-bold mb-4">New Contract Form</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Please fill in the details below to create a new contract.
      </p>

      {/* Select Contract Template */}
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Select a Contract Template *</Label>
        <Select>
          <SelectTrigger className="w-full">Contract Type</SelectTrigger>
          <SelectContent>
            <SelectItem value="type1">Type 1</SelectItem>
            <SelectItem value="type2">Type 2</SelectItem>
            <SelectItem value="type3">Type 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Search Contract Template */}
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Search Contract Template *</Label>
        <Input type="text" placeholder="Search here..." />
      </div>

      {/* Contract Name */}
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Contract Name *</Label>
        <Input type="text" placeholder="Enter Contract Name" />
      </div>

      {/* Contract Details */}
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Contract Details *</Label>
        <Textarea placeholder="Enter Contract Details" rows={4} />
      </div>

      {/* Contract Start Date */}
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Contract Start Date *</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={cn(
              "w-full justify-start text-left font-normal",
              !startDate && "text-muted-foreground"
            )}>
              {startDate ? format(startDate, "MM/dd/yyyy") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={startDate} onSelect={setStartDate} />
          </PopoverContent>
        </Popover>
      </div>

      {/* Contract End Date */}
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Contract End Date *</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={cn(
              "w-full justify-start text-left font-normal",
              !endDate && "text-muted-foreground"
            )}>
              {endDate ? format(endDate, "MM/dd/yyyy") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={endDate} onSelect={setEndDate} />
          </PopoverContent>
        </Popover>
      </div>

      {/* Parties Involved */}
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Parties Involved *</Label>
        <Textarea placeholder="Enter Parties Involved" rows={3} />
      </div>

      {/* Contract Amount */}
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Contract Amount *</Label>
        <Input type="number" placeholder="Enter Contract Amount" />
      </div>

      {/* Upload Necessary Documents */}
      <div className="mb-6">
        <Label className="block text-sm font-medium mb-1">Upload Necessary Documents *</Label>
        <Input type="file" onChange={handleFileUpload} />
      </div>

      {/* Submit Button */}
      <div>
        <Button variant="default" className="w-full">Submit</Button>
      </div>
     </div>
            </CardContent>
        </CardHeader>
    </Card>
  );
};

export default NewContract;
