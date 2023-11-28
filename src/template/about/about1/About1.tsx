import { component$ } from "@builder.io/qwik"

import Header from "~/components/header/About1"
import OurStory from "./components/OurStory"
import Award1 from "~/components/award/Award1"
import CoreValues1 from "~/components/core-values/CoreValues1"

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <OurStory />
        <Award1 />
        <CoreValues1 />
      </main>
    </>
  )
})