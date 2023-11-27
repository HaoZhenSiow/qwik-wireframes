import { component$ } from "@builder.io/qwik"

import DoubleMarquee from "~/components/hero/DoubleMarquee"
import Feature1 from "./feature/Feature1"
import Feature2 from "./feature/Feature2"
import LogoMarquee from "~/components/ultil/marquee/LogoMarquee"
import Portfolio from "./Portfolio"
import Testimonials from "./Testimonials"

export default component$(() => {
  return (
    <>
      <DoubleMarquee />
      <main>
        <LogoMarquee />
        <Feature1 />
        <Feature2 />
        <Portfolio />
        <Testimonials />
      </main>
    </>
  )
})