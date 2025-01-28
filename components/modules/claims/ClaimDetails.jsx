"use client";

import * as React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const ClaimDetails = () => {
  const [proofOfPayment, setProofOfPayment] = React.useState(null);

  const handleFileUpload = (event) => {
    setProofOfPayment(event.target.files[0]);
  };

  const claim = {
    requestId: "N/A",
    employee: "Jane Doe",
    project: "Community Outreach Project",
    amount: "KES 25,000",
    status: "Pending",
    submissionDate: "October 15, 2024",
    purpose: "Travel expenses for client site visit in Kisumu",
    document: {
      name: "Flight_Receipt.pdf",
      description: "Flight receipt to Kisumu",
      size: "500 KB",
    },
    approvalSteps: [
      { step: "Step 1: Team Lead", approver: "John Doe", status: "Approved", date: "01/11/2024" },
      { step: "Step 2: Initial Approval", approver: "John Doe", status: "Approved", date: "01/11/2024" },
      { step: "Step 3: Finance Review", approver: "Mary Ann", status: "Pending", date: "-" },
      { step: "Step 4: Final Approval", approver: "Susan Lee", status: "Pending", date: "-" },
    ],
  };

  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Claim Request Details</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-muted-foreground">Request ID</p>
              <p>{claim.requestId}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Employee / Project Name</p>
              <p>{claim.employee} / {claim.project}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Requested Amount</p>
              <p>{claim.amount}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Status</p>
              <p>{claim.status}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Submission Date</p>
              <p>{claim.submissionDate}</p>
            </div>
            <div className="col-span-2">
              <p className="text-muted-foreground">Purpose / Description</p>
              <p>{claim.purpose}</p>
            </div>
          </div>

          {/* Attached Documents */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Attached Documents</h3>
            <div className="border p-4 rounded-md mt-2">
              <p><strong>Receipt:</strong> {claim.document.name}</p>
              <p><strong>Description:</strong> {claim.document.description}</p>
              <p><strong>File Size:</strong> {claim.document.size}</p>
              <div className="mt-2 flex gap-4">
                <Button variant="outline">View</Button>
                <Button>Download</Button>
              </div>
            </div>
          </div>

          {/* Proof of Payment Upload */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Upload Proof of Payment</h3>
            <Input type="file" onChange={handleFileUpload} className="mt-2" />
            {proofOfPayment && <p className="mt-2">Uploaded: {proofOfPayment.name}</p>}
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
                </TableRow>
              </TableHeader>
              <TableBody>
                {claim.approvalSteps.map((step, index) => (
                  <TableRow key={index}>
                    <TableCell>{step.step}</TableCell>
                    <TableCell>{step.approver}</TableCell>
                    <TableCell>{step.status}</TableCell>
                    <TableCell>{step.date}</TableCell>
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

export default ClaimDetails;
