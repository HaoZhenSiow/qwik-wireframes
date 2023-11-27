import { component$, useStylesScoped$ } from "@builder.io/qwik"

const navitems = ['About', 'Services', 'Portfolio', 'Testimonials', 'Contact']

export default component$(() => {
  useStylesScoped$(`
    nav {
      --btn-bg: black;
      --btn-color: white;
      display: flex;
      align-items: center;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 1em;
      list-style: none;
    }

    button {
      background-color: var(--btn-bg);
      color: var(--btn-color);
      font-weight: bold;
      padding: .5em 1em;
      border-radius: 5px;
    }

    @media (width <= 950px) {
      nav {
        display: none;
      }
    }
  `)
  
  return (
    <nav>
      <ul>
        {navitems.map((item) => (
          <li key={item}>
            <a href={`/${item}`}>{item}</a>
          </li>
        ))}
        <li>
          <button type="button">Free Quotation</button>
        </li>
      </ul>
    </nav>
  )
})