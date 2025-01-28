"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { toast } from "/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

// Zod schema for form validation
const FormSchema = z.object({
  name: z.string().nonempty("Name is required").default("Jane Doe"),
  invoiceNumber: z.string().nonempty("Invoice Number is required"),
  id: z.string().nonempty("ID is required").default("ID12345"),
  contractReference: z.string().nonempty("Contract Reference is required").default("CR1234"),
  projectId: z.string().nonempty("Project ID is required").default("PRJ123"),
  contractAmount: z.string().nonempty("Contract Amount is required").default("KES 1,000,000"),
  startDate: z.date().refine((val) => val instanceof Date && !isNaN(val), {
    message: "Start Date is required",
  }),
  endDate: z.date().refine((val) => val instanceof Date && !isNaN(val), {
    message: "End Date is required",
  }),
});

export function NewClaim() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        <Card>
            
            <CardHeader>
                NEW CLAIM
            </CardHeader>
            <CardContent>
 <div className="mb-4">
               <Label className="block text-sm font-medium mb-1"> Name *</Label>
               <Input type="text" placeholder=" Name" />
             </div>
        
              <div className="mb-4">
                <Label className="block text-sm font-medium mb-1">Invoice Number*</Label>
                <Input type="text" placeholder="Invoice Number" />
              </div>
        
             <div className="mb-4">
               <Label className="block text-sm font-medium mb-1">Contract Name *</Label>
               <Input type="text" placeholder="Enter Contract Name" />
             </div>

           {/* <div className="mb-4">
             <Label className="block text-sm font-medium mb-1">Form ID *</Label>
             <Input type="text" placeholder="Enter Form ID" />
           </div> */}
        
        
        
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>

            </CardContent>
        </Card>   
      </form>
    </Form>
  );
}

export default NewClaim;
