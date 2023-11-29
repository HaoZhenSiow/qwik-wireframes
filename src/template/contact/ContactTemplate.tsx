import { component$ } from "@builder.io/qwik"
import Contact1 from "~/components/contact/Contact1"
import Faq1 from "~/components/faq/faq1/Faq1"

import TextOnlyForm from "~/components/form/TextOnlyForm"

export default component$(() => {
  return (
    <main>
      <Contact1 />
      <Faq1 />
      <TextOnlyForm />
    </main>
  )
})