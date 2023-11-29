import { component$, useStylesScoped$ } from "@builder.io/qwik";
import optImg from "../ultil/optimization/Image";

export default component$(() => {
  useStylesScoped$(`
    section {
      text-align: center;
    }

    h2, p { text-align: left; }

    h3 {
      margin-top: 2em;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1em;
      margin-top: 1em;

      @media (width > 1000px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }

    button {
      font-weight: bold;
      padding: 1em 2em;
      margin-top: 2em;
      background-color: black;
      color: white;
      border-radius: 5px;
      margin-inline: auto;
    }
  `)
  return (
    <section class="fluid-section">
      <h2>Life @ Swiss</h2>
      <p>At Swiss Interior, we believe in the constant upgrading of skills and design. We partner with other leading brands within and beyond the interior design industry to keep our interior designers in trend and updated with the latest designs, products and styles</p>
      <div class="gallery">
        {Array(12).fill('x').map((x, idx) => (
          optImg(`/trip/${idx+1}`, 1000, 667, ['183.075px', '323.725px', '388.025px'], 'test')
        ))}
      </div>
      <h3>D & D 2023</h3>
      <div class="gallery">
        {Array(24).fill('x').map((x, idx) => (
          optImg(`/D&D/${idx+1}`, 1000, 667, ['183.075px', '323.725px', '388.025px'], 'test')
        ))}
      </div>
      <h3>GFA Training</h3>
      <div class="gallery">
        {Array(24).fill('x').map((x, idx) => (
          optImg(`/GFA/${idx+1}`, 1000, 667, ['183.075px', '323.725px', '388.025px'], 'test')
        ))}
      </div>
      <button type="button">Join Us!</button>
    </section>
  )
})