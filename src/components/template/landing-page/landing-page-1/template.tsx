import { component$ } from "@builder.io/qwik"

import SingleImage from "~/components/feature/SingleImage"
import DoubleMarquee from "~/components/hero/DoubleMarquee"

export default component$(() => {
  return (
    <>
      <DoubleMarquee />
      <SingleImage />
    
    </>
  )
})