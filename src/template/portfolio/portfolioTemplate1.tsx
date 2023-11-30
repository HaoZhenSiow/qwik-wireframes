import { component$ } from "@builder.io/qwik";
import Display3_6 from "./components/Display3_6";
import TextOnlyForm from "~/components/form/TextOnlyForm";

export default component$(() => {
  return (
    <main>
      <Display3_6 />
      <TextOnlyForm />
    </main>
  )
})