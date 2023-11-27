import { component$,useStylesScoped$ } from '@builder.io/qwik'

import Review from '~/components/social-proof/card/Review'

export default component$(() => {
  useStylesScoped$(`
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      align-self: start;
    }

    div {
      display: grid;
      gap: 1.5em;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @media (width > 650px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (width > 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    button {
      font-weight: bold;
      padding: 1em 2em;
      margin-top: 2em;
      background-color: black;
      color: white;
      border-radius: 5px;
    }
  `)

  return (
    <section class="fluid-section" aria-label="testimonials">
      <h2>Don't Take Our Word For It. Hear What Our Customers Say.</h2>
      <div>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
      <button type="button">View More Testimonials</button>
    </section>
  )
})