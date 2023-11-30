import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Testimonial1 from "~/template/testimonials/testimonial1/Testimonial1";

export default component$(() => {
  return (
    <>
      <Testimonial1 />
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
