import { component$ } from "@builder.io/qwik";

import TextOnlyForm from "~/components/form/TextOnlyForm";
import Project from "~/components/header/Project";
import Gallery from "./Gallery";

export default component$(() => {
  return (
    <>
      <Project />
      <main>
        <Gallery />
        <TextOnlyForm />
      </main>
    </>
  )
})