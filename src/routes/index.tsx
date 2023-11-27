import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import DoubleMarquee from "~/components/hero/DoubleMarquee";

export default component$(() => {
  return (
    <>
      <DoubleMarquee />
      

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
