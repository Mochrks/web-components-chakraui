import { MpCard, MpBreadcrumbs } from "../"
import React from "react"

const ShowcaseBreadcrumbs = () => {
  return (
    <MpCard title="Breadcrumbs">
      <MpBreadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Components", href: "/components" }, { label: "Showcase" }]}
      />
    </MpCard>
  )
}

export default ShowcaseBreadcrumbs
