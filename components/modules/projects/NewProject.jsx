"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

// Schema for form validation
const FormSchema = z.object({
  projectName: z.string().min(1, { message: "Project name is required." }),
  contractID: z.string().min(1, { message: "Contract ID is required." }),
  projectValue: z.string().min(1, { message: "Project value is required." }),
  projectRefNumber: z.string().min(1, { message: "Project reference number is required." }),
  contractStartDate: z.date({ required_error: "Start date is required." }),
  contractEndDate: z.date({ required_error: "End date is required." }),
  projectMilestones: z.string().optional(),
  totalBudgetValue: z.string().min(1, { message: "Total budget value is required." }),
  uploadDocuments: z.any().optional(),
  uploadProposal: z.any().optional(),
  uploadSignedContract: z.any().optional(),
  uploadExecutionMemo: z.any().optional(),
  uploadSignedBudget: z.any().optional(),
  projectPartner: z.string().optional(),
  assignTeamMembers: z.array(z.string()).optional(),
});

export default function NewProject() {
  const [milestoneModalVisible, setMilestoneModalVisible] = useState(false);
  const [milestones, setMilestones] = useState([]);
  const [currentMilestone, setCurrentMilestone] = useState(null);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      projectName: "",
      contractID: "",
      projectValue: "",
      projectRefNumber: "",
      contractStartDate: new Date(),
      contractEndDate: new Date(),
      projectMilestones: "",
      totalBudgetValue: "",
      uploadDocuments: null,
      uploadProposal: null,
      uploadSignedContract: null,
      uploadExecutionMemo: null,
      uploadSignedBudget: null,
      projectPartner: "",
      assignTeamMembers: [],
    },
  });

  function onSubmit(data) {
    console.log("Form Data Submitted: ", data);
    toast({
      title: "Project Registered",
      description: "The project details have been successfully submitted.",
    });
  }

  return (
    <div className=" mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">New Project Registration</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        
        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="projectName">Project Name *</Label>
              <Input {...form.register("projectName")} placeholder="Enter project name" />
            </div>
            <div>
              <Label htmlFor="contractID">Contract ID *</Label>
              <Input {...form.register("contractID")} placeholder="Enter contract ID" />
            </div>
            <div>
              <Label htmlFor="projectValue">Project Value *</Label>
              <Input {...form.register("projectValue")} placeholder="Enter project value" />
            </div>
            <div>
              <Label htmlFor="projectRefNumber">Project Reference Number *</Label>
              <Input {...form.register("projectRefNumber")} placeholder="Enter reference number" />
            </div>
            <div>
              <Label htmlFor="contractStartDate">Contract Start Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <CalendarIcon className="mr-2" />
                    {form.watch("contractStartDate") ? format(form.watch("contractStartDate"), "MM/dd/yyyy") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={form.watch("contractStartDate")}
                    onSelect={(date) => form.setValue("contractStartDate", date)}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label htmlFor="contractEndDate">Contract End Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <CalendarIcon className="mr-2" />
                    {form.watch("contractEndDate") ? format(form.watch("contractEndDate"), "MM/dd/yyyy") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    mode="single"
                    selected={form.watch("contractEndDate")}
                    onSelect={(date) => form.setValue("contractEndDate", date)}
                  />
                </PopoverContent>
              </Popover>
            </div>
            {/* <Button className="w-auto" type="button" onClick={() => setMilestoneModalVisible(true)}>Add Milestone</Button> */}

          </CardContent>
        </Card>

        {/* File Uploads */}
        <Card>
          <CardHeader>
            <CardTitle>Document Uploads</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div>
              <Label>Upload Proposal</Label>
              <Input type="file" {...form.register("uploadProposal")} />
            </div>
            <div>
              <Label>Upload Signed Contract</Label>
              <Input type="file" {...form.register("uploadSignedContract")} />
            </div>
            <div>
              <Label>Upload Execution Memo</Label>
              <Input type="file" {...form.register("uploadExecutionMemo")} />
            </div>
            <div>
              <Label>Upload Signed Budget</Label>
              <Input type="file" {...form.register("uploadSignedBudget")} />
            </div>
          </CardContent>
        </Card>

        <Button className="mr-5" type="button" onClick={() => setMilestoneModalVisible(true)}>Add Milestone</Button>

        {/* Submit Button */}
        <Button type="submit">Submit Project</Button>
      </form>

      {/* Milestone Modal */}
      <Dialog open={milestoneModalVisible} onOpenChange={setMilestoneModalVisible}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Project Milestone</DialogTitle>
          </DialogHeader>
          <Input placeholder="Enter milestone details" />
          <DialogFooter>
            <Button onClick={() => setMilestoneModalVisible(false)}>Cancel</Button>
            <Button onClick={() => setMilestones([...milestones, "New Milestone"])}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
