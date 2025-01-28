import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const company = [
    {
        name: "Company A"
     
    },
    {
        name: "Company A"

    },
    {
        name: "Company B"

    },
    {
        name: "Company C"

    },
    {
        name: "Company D"

    },
    {
        name: "Company E"

    },
    {
        name: "Company F"

    },
  ]

  const consultant = [
    {
        name: "Consultant A"
     
    },
    {
        name: "Consultant A"

    },
    {
        name: "Consultant B"

    },
    {
        name: "Consultant C"

    },
    {
        name: "Consultant D"

    },
    {
        name: "Consultant E"

    },
    {
        name: "Consultant F"

    },
  ]

export function Admin() {
  return (
    <Tabs defaultValue="company" className=" m-7">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="company">Companies</TabsTrigger>
        <TabsTrigger value="consultant">Consultants</TabsTrigger>
      </TabsList>
      <TabsContent value="company">
        <Card>
          <CardHeader>
            <CardTitle>Companies</CardTitle>
            <CardDescription>
Registered Companies          
  </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <Table>
      <TableCaption>A list of your Companies</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Company Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {company.map((company) => (
          <TableRow key={company.name}>
            <TableCell className="font-medium">{company.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
          </CardContent>
          {/* <CardFooter>
            <Button></Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
{/* CARD 2 */}
      <TabsContent value="consultant">
        <Card>
          <CardHeader>
            <CardTitle>Consultants</CardTitle>
            <CardDescription>
Consultants    
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <Table>
      <TableCaption>A list of your Consultants.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Consultants Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {consultant.map((consultant) => (
          <TableRow key={consultant.name}>
            <TableCell className="font-medium">{consultant.name}</TableCell>  
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
    
      </TableFooter>
    </Table>
          </CardContent>
          {/* <CardFooter>
            <Button></Button>
          </CardFooter> */}
        </Card>
      </TabsContent>
    </Tabs>
  )
}
