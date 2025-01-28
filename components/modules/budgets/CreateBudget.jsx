"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem, SelectTrigger, SelectContent } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea"


const schema = z.object({
  projectName: z.string().min(1, "Project Name is required"),
  projectId: z.string().min(1, "Project ID is required"),
  projectValue: z
    .number({ invalid_type_error: "Project Value must be a number" })
    .min(0, "Project Value must be at least 0"),
  projectPerformance: z.string().min(1, "Project Performance is required"),
  budgetStartDate: z.date({ required_error: "Start Date is required" }),
  budgetEndDate: z.date({ required_error: "End Date is required" }),
});

const NewBudget = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      projectName: "",
      projectId: "",
      projectValue: "",
      projectPerformance: "",
      budgetStartDate: null,
      budgetEndDate: null,
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div><Tabs defaultValue="general" className="h-50 m-10">
    <TabsList className="grid w-full h-30 bg-[#204c44] grid-cols-3">
      <TabsTrigger value="general">General Information</TabsTrigger>
      <TabsTrigger value="budget">Budget Categories</TabsTrigger>
    </TabsList>
    <TabsContent value="general">
    <Card className="p-5">
      <CardHeader>
        <CardTitle>New Budget Entry Form</CardTitle>
        <CardDescription>
          Please fill in the details below to create a new budget
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* Project Name */}
          <div>
            <Label>Project Name *</Label>
            <Select
              onValueChange={(value) => setValue("projectName", value)}
              value={watch("projectName")}
            >
              <SelectTrigger className="w-full" />
              <SelectContent>
                <SelectItem value="Project A">Project A</SelectItem>
                <SelectItem value="Project B">Project B</SelectItem>
                <SelectItem value="Project C">Project C</SelectItem>
              </SelectContent>
            </Select>
            {errors.projectName && (
              <p className="text-red-500 text-sm">{errors.projectName.message}</p>
            )}
          </div>

          {/* Project ID */}
          <div>
            <Label>Project ID *</Label>
            <Input
              type="text"
              {...register("projectId")}
              placeholder="Enter Project ID"
            />
            {errors.projectId && (
              <p className="text-red-500 text-sm">{errors.projectId.message}</p>
            )}
          </div>

          {/* Project Value */}
          <div>
            <Label>Project Value *</Label>
            <Input
              type="number"
              {...register("projectValue", { valueAsNumber: true })}
              placeholder="Enter Project Value"
            />
            {errors.projectValue && (
              <p className="text-red-500 text-sm">{errors.projectValue.message}</p>
            )}
          </div>

          {/* Project Performance */}
          <div>
            <Label>Project Performance *</Label>
            <Input
              type="text"
              {...register("projectPerformance")}
              placeholder="Enter Project Performance"
            />
            {errors.projectPerformance && (
              <p className="text-red-500 text-sm">{errors.projectPerformance.message}</p>
            )}
          </div>

          {/* Start Date */}
          <div>
            <Label>Start Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  {startDate ? format(startDate, "PPP") : "Pick a start date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  selected={startDate}
                  onSelect={(date) => {
                    setStartDate(date);
                    setValue("budgetStartDate", date);
                  }}
                />
              </PopoverContent>
            </Popover>
            {errors.budgetStartDate && (
              <p className="text-red-500 text-sm">{errors.budgetStartDate.message}</p>
            )}
          </div>

          {/* End Date */}
          <div>
            <Label>End Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  {endDate ? format(endDate, "PPP") : "Pick an end date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  selected={endDate}
                  onSelect={(date) => {
                    setEndDate(date);
                    setValue("budgetEndDate", date);
                  }}
                />
              </PopoverContent>
            </Popover>
            {errors.budgetEndDate && (
              <p className="text-red-500 text-sm">{errors.budgetEndDate.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
    </TabsContent>
    <TabsContent value="budget">
      <Card>
        <CardHeader>
          <CardTitle>BUDGET CATEGORIES</CardTitle>
          <CardDescription>
Description of your Budget 
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
        <div className="p-5 grid grid-col-2">
      <h1 className="text-xl font-bold mb-4">Please fill in the details below to create a new budget</h1>

      {/* Add Category */}
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Add Category *</Label>
        <Select>
          <SelectTrigger className="w-full">Select Category</SelectTrigger>
          <SelectContent>
            <SelectItem value="category1">Category 1</SelectItem>
            <SelectItem value="category2">Category 2</SelectItem>
            <SelectItem value="category3">Category 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Search Category *</Label>
        <Input type="text" placeholder="Search here..." />
      </div>

      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Description *</Label>
        <Textarea placeholder="Enter description" rows={4} />
      </div>

      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Item Name *</Label>
        <Input type="text" placeholder="Enter Item Name" />
      </div>

      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Planned Cost *</Label>
        <Input type="number"  />
      </div>

      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Actual Cost *</Label>
        <Input type="number"  />
      </div>

      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Variance</Label>
        <Input type="number"  readOnly className="bg-gray-100 cursor-not-allowed" />
      </div>

      <div className="flex space-x-2">
        <Button variant="default">Add Item</Button>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Reset</Button>
        <Button variant="destructive">Delete</Button>
      </div>
    </div>
        </CardContent>
        <CardFooter>
          <Button>Create Budget</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
  
   
    </div>
  );
};

export default NewBudget;
