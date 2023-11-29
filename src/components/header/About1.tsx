import { component$, useStylesScoped$ } from "@builder.io/qwik";
import optImg from "../ultil/optimization/Image";


export default component$(() => {
  useStylesScoped$(`
    img {
      width: 100%;
      height: auto;
      display: block;
      margin-top: 100px;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-top: 2em;
      gap: 1em;
    }

    p {
      max-width: 38.125em;
    }

    @media (width >= 1000px) {
      div {
        flex-direction: row;
        gap: 5em;
      }

      h1 { flex-shrink: 0; }
    }
  `)
  
  return (
    <header class="fluid-header">
      {optImg('/header/header1/header1', 3200, 2133, ['382.25px', '664.175px', '1199.97px'], 'members of the team', true)}
      <div>
        <h1>Visualize Your Dream Space:<br />We're Your Creative Team</h1>
        <p>At FT2, we're your dedicated partners in creating spaces that truly reflect your lifestyle and vision. Our award-winning interior designers are ready to bring your dream living space to life. With FT2, your living space isn't just transformed; it's designed to complement your life seamlessly. We're here to make your vision a reality, ensuring a hassle-free and enjoyable journey.</p>
      </div>
    </header>
  )
})