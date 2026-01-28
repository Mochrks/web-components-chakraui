import { MpCard, MpStepper, MpTabs, MpPagination } from "../"
import { Text } from "@chakra-ui/react"
import React, { useState } from "react"

const ShowcaseNavigation = () => {
  const [page, setPage] = useState(1)
  const steps = [
    { title: "Select campaign", description: "Select campaign settings" },
    { title: "Create ad group", description: "Set up ad group" },
    { title: "Create ads", description: "Create ad content" },
  ]
  const activeStep = 1

  return (
    <React.Fragment>
      <MpCard title="Stepper">
        <MpStepper steps={steps} activeStep={activeStep} />
      </MpCard>

      <MpCard title="Tabs & Dialog">
        <MpTabs
          tabs={[
            { label: "Overview", content: <Text>Overview Content</Text> },
            { label: "Details", content: <Text>Details Content</Text> },
            { label: "Settings", content: <Text>Settings Content</Text> },
          ]}
        />
      </MpCard>

      <MpCard title="Pagination">
        <MpPagination currentPage={page} totalPages={10} onPageChange={setPage} />
      </MpCard>
    </React.Fragment>
  )
}
export default ShowcaseNavigation
