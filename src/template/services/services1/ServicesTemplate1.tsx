import { component$ } from "@builder.io/qwik";
import Faq1 from "~/components/faq/faq1/Faq1";
import TextOnlyForm from "~/components/form/TextOnlyForm";
import Workflow1 from "~/components/workflow/workflow1/Workflow1";
import Services from "./Services";

export default component$(() => {
  return (
    <>
      <Services />
      <main>
        <Workflow1 />
        <Faq1 />
        <TextOnlyForm />
      </main>
    </>
    
  )
})