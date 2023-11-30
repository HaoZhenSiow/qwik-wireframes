import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import LandingPage1 from "~/template/landing-page/landing-page-1/LandingPage1";

export default component$(() => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>This is a Serive Page</h1>
      <LandingPage1 />
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
