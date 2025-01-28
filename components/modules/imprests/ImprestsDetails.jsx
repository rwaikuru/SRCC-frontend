"use client";

import * as React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const ImprestReport = () => {
  const imprest = {
    requestId: "2024-IMP-0123",
    amount: "KES 50,000",
    submissionDate: "October 10, 2024",
    purpose: "Travel and accommodation expenses for workshop attendance",
    status: "In Progress",
    document: {
      name: "Flight_Receipt.pdf",
      description: "Flight receipt to Nairobi",
      size: "500 KB",
    },
    approvalSteps: [
      { step: "Step 1: Project Lead", approver: "(John Doe, Manager)", status: "Approved", date: "01/11/2024", comments: "Approved for workshop expenses" },
      { step: "Step 2: Finance Review", approver: "(Mary Ann, Finance Officer)", status: "Pending", date: "-", comments: "-" },
      { step: "Step 3: Finance Approver", approver: "(Susan Lee, Director)", status: "Pending", date: "-", comments: "-" },
    ],
  };

  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Imprest Request Details</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-muted-foreground">Request ID</p>
              <p>{imprest.requestId}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Requested Amount</p>
              <p>{imprest.amount}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Submission Date</p>
              <p>{imprest.submissionDate}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Status</p>
              <p>{imprest.status}</p>
            </div>
            <div className="col-span-2">
              <p className="text-muted-foreground">Purpose</p>
              <p>{imprest.purpose}</p>
            </div>
          </div>

          {/* Attached Documents */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Attached Documents</h3>
            <div className="border p-4 rounded-md mt-2">
              <p><strong>Receipt:</strong> {imprest.document.name}</p>
              <p><strong>Description:</strong> {imprest.document.description}</p>
              <p><strong>File Size:</strong> {imprest.document.size}</p>
              <div className="mt-2 flex gap-4">
                <Button variant="outline">View</Button>
                <Button>Download</Button>
              </div>
            </div>
          </div>

          {/* Approval Status Path */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Approval Status Path</h3>
            <Table className="mt-2">
              <TableHeader>
                <TableRow>
                  <TableHead>Approval Step</TableHead>
                  <TableHead>Approver</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Comments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {imprest.approvalSteps.map((step, index) => (
                  <TableRow key={index}>
                    <TableCell>{step.step}</TableCell>
                    <TableCell>{step.approver}</TableCell>
                    <TableCell>{step.status}</TableCell>
                    <TableCell>{step.date}</TableCell>
                    <TableCell>{step.comments}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImprestReport;
