import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import ServicesTemplate1 from "~/template/services/services1/ServicesTemplate1";

export default component$(() => {
  return (
    <>
      <ServicesTemplate1 />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
