import { component$ } from "@builder.io/qwik"

import DoubleMarquee from "~/components/hero/DoubleMarquee"
import Feature1 from "./feature/Feature1"
import Feature2 from "./feature/Feature2"
import LogoMarquee from "~/components/ultil/marquee/LogoMarquee"
import Display3_6 from "~/components/social-proof/Display3_6"

export default component$(() => {
  return (
    <>
      <DoubleMarquee />
      <main>
        <LogoMarquee />
        <Feature1 />
        <Feature2 />
        <Display3_6 />
      </main>
    </>
  )
})