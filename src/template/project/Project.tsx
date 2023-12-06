import { component$ } from "@builder.io/qwik";
import TextOnlyForm from "~/components/form/TextOnlyForm";
import Project from "~/components/header/Project";

export default component$(() => {
  return (
    <>
      <Project />
      <main>
        <TextOnlyForm />
      </main>
    </>
  )
})