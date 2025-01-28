import Link from "next/link"

import { Button } from "@/components/ui/button"

export function ProjectButton() {
  return (
    <Button className=" text-black" asChild>
      <Link href="/projects">Add Project</Link>
    </Button>
  )
}
