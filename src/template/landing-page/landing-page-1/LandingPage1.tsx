import { component$ } from "@builder.io/qwik"

import DoubleMarquee from "~/components/hero/DoubleMarquee"
import Feature1 from "./feature/Feature1"
import Feature2 from "./feature/Feature2"

export default component$(() => {
  return (
    <>
      <DoubleMarquee />
      <Feature1 />
      <Feature2 />
    </>
  )
})