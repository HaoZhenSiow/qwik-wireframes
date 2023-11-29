import { component$ } from "@builder.io/qwik"

import Header from "~/components/header/About1"
import OurStory from "./components/OurStory"
import Award1 from "~/components/award/Award1"
import CoreValues1 from "~/components/core-values/CoreValues1"
import Timeline1 from "~/components/timeline/Timeline1"
import TextOnlyForm from "~/components/form/TextOnlyForm"
import Gallery1 from "~/components/gallery/Gallery1"

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <OurStory />
        <Award1 />
        <CoreValues1 />
        <Timeline1 />
        <TextOnlyForm />
        <Gallery1 />
      </main>
    </>
  )
})