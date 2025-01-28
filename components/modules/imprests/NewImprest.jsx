"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const NewImprest = () => {
  const [requestDate, setRequestDate] = React.useState(new Date());
  const [dueDate, setDueDate] = useState(null);
  const [uploadedFiles, setUploadedFiles] = React.useState([]);


  
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };
  
  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };
  return (
    <Card>
        <CardHeader>
            <CardContent>
            <div className="p-5">
      <h1 className="text-xl font-bold mb-4">New Imprest Request Form for Project A</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Please fill in the details below to create an Imprest request.
      </p>
    
      <div className="mb-4">
      <Label className="block text-sm font-medium mb-1">Upload Supporting Documents*</Label>
    <Input type="file" multiple onChange={handleFileUpload} />
    <Button variant="ghost" className="mt-2">Add Another File</Button>

    {/* Display uploaded files */}
    <div className="mt-2">
      {uploadedFiles.map((file, index) => (
        <div key={index} className="flex items-center gap-2 border p-2 rounded-md mt-2">
          <span>{file.name}</span>
          <Button variant="destructive" size="sm" onClick={() => removeFile(index)}>
            Remove
          </Button>
        </div>
      ))}
      </div>
      </div>

      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Total Amount Requested *</Label>
        <Input type="number" placeholder="Enter amount" />
      </div>

      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Purpose of Imprest *</Label>
        <Textarea placeholder="Enter purpose" rows={4} />
      </div>

     

      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Request Date *</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={cn(
              "w-full justify-start text-left font-normal",
              !requestDate && "text-muted-foreground"
            )}>
              {requestDate ? format(requestDate, "MM/dd/yyyy") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={requestDate} onSelect={setRequestDate} />
          </PopoverContent>
        </Popover>
      </div>

      {/* Due Date */}
      <div className="mb-4">
        <Label className="block text-sm font-medium mb-1">Due Date *</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className={cn(
              "w-full justify-start text-left font-normal",
              !dueDate && "text-muted-foreground"
            )}>
              {dueDate ? format(dueDate, "MM/dd/yyyy") : "Select date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={dueDate} onSelect={setDueDate} />
          </PopoverContent>
        </Popover>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <Button variant="default" className="w-full">Submit</Button>
      </div>
    </div>
            </CardContent>
        </CardHeader>
    </Card>
   
  );
};

export default NewImprest;
