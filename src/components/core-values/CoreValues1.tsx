import { component$, useStylesScoped$ } from "@builder.io/qwik";

const checked = (<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 11l3 3l8 -8" stroke-width="3.5"></path><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"></path></svg>)

export default component$(() => {
  useStylesScoped$(`
    .core-values {
      display: grid;
      gap: 5em;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @media (width > 650px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (width > 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }

    .value {
      display: flex;
    }

    svg {
      font-size: 2.5em;
      flex-shrink: 0;
    }
  `)
  return (
    <section class="fluid-section">
      <h2>The Values that Drive Everything We Do</h2>
      <div class="core-values">
          <div class="value">
            {checked}
            <div class="copy">
              <h3>PROFESSIONAL</h3>
              <p>We always prioritize your needs and the work we deliver is of impeccable quality.</p>
            </div>
          </div>
          <div class="value">
            {checked}
            <div class="copy">
              <h3>TRANSPARENCY</h3>
              <p>We value transparency, which is why we are upfront & realistic about all possible costs before we begin working on your dream project. You can expect no hidden costs from us.</p>
            </div>
          </div>
          <div class="value">
            {checked}
            <div class="copy">
              <h3>APPROACHABLE</h3>
              <p>We are open to any feedback to improve ourselves and serve you better.</p>
            </div>
          </div>
          <div class="value">
            {checked}
            <div class="copy">
              <h3>TRUSTWORTHY</h3>
              <p>We believe in communicating extensively with you to design a space that reflects your personal requirements.</p>
            </div>
          </div>
          <div class="value">
            {checked}
            <div class="copy">
              <h3>TRUSTWORTHY</h3>
              <p>We believe in communicating extensively with you to design a space that reflects your personal requirements.</p>
            </div>
          </div>
          <div class="value">
            {checked}
            <div class="copy">
              <h3>TRUSTWORTHY</h3>
              <p>We believe in communicating extensively with you to design a space that reflects your personal requirements.</p>
            </div>
          </div>
        
      </div>
    </section>
  )
})