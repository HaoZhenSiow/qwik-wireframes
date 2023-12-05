import { component$,useStylesScoped$ } from '@builder.io/qwik'

import Review from '~/components/social-proof/card/Review'
import fluid from '~/lib/fluid'
import reviews from '../reviews'

export default component$(() => {
  useStylesScoped$(`
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: ${fluid(150, 200, 350, 1440)};
    }

    h1 {
      align-self: start;
      margin-bottom: 2.5em;
    }

    .reviews {
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
  `)

  return (
    <section class="fluid-section" aria-label="testimonials">
      <h1>Don't Take Our Word For It. Hear What Our Customers Say.</h1>
      <div class="reviews">
        {reviews.map((review, idx) => (
          <Review key={idx} title={review.title} copy={review.copy}/>
        ))}
      </div>
    </section>
  )
})