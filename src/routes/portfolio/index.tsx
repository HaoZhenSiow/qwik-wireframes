import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import PortfolioTemplate1 from "~/template/portfolio/PortfolioTemplate1";

export default component$(() => {
  return (
    <>
      <PortfolioTemplate1 />
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
