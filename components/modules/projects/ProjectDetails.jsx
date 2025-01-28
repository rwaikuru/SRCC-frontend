"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ProjectDetails = () => {
  const router = useRouter()

  const project = {
    projectName: "Project A",
    contractId: "CONTRACT001",
    projectValue: "$500,000",
    projectRefNumber: "REF12345",
    startDate: "01/01/2025",
    endDate: "12/31/2025",
    projectOwner: "John Doe",
    teamMembers: ["John Doe", "Jane Smith", "Mark Allen"],
    milestones: "Phase 1 - 50%, Phase 2 - 75%, Phase 3 - 100%",
    totalBudget: "$500,000",
    documents: {
      proposal: "project_proposal.pdf",
      signedContract: "signed_contract.pdf",
      contractMemo: "contract_execution_memo.pdf",
      signedBudget: "signed_budget.pdf",
    },
  }

  return (
    <div className="p-8">
      <Card>
        {/* Header with title and Create button */}
        <CardHeader>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Project A Details</p>
            <DropdownMenu>
            <DropdownMenuTrigger
    className="border border-gray-300 w-70 rounded-md py-2 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Create
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => router.push("/budget/CreateBudget")}>
      Create Budget
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => router.push("/claim/CreateClaim")}>
      Create Claim
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => router.push("/contract/CreateContract")}>
      Create Contract
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => router.push("/imprest/CreateImprest")}>
      Create Imprest
    </DropdownMenuItem>
  </DropdownMenuContent>
  </DropdownMenu>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-muted-foreground">Project Name</p>
              <p>{project.projectName}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Contract ID</p>
              <p>{project.contractId}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Project Value</p>
              <p>{project.projectValue}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Project Ref Number</p>
              <p>{project.projectRefNumber}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Contract Start Date</p>
              <p>{project.startDate}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Contract End Date</p>
              <p>{project.endDate}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Project Owner</p>
              <p>{project.projectOwner}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Assign Team Members</p>
              <p>{project.teamMembers.join(", ")}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Project Milestones</p>
              <p>{project.milestones}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Total Budget Value</p>
              <p>{project.totalBudget}</p>
            </div>
            <div className="col-span-2">
              <p className="text-muted-foreground">Documents</p>
              <div className="space-y-2">
                <p>Project Proposal: {project.documents.proposal}</p>
                <p>Signed Contract: {project.documents.signedContract}</p>
                <p>Contract Execution Memo: {project.documents.contractMemo}</p>
                <p>Signed Budget: {project.documents.signedBudget}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push("/edit-project")}
            >
              Edit Project Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProjectDetails
