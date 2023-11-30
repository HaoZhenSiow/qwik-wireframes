import { component$, useSignal, useStylesScoped$, useVisibleTask$ } from '@builder.io/qwik'
import { Slot } from '@builder.io/qwik'
import useDialog from '~/hooks/useDialog'

export default component$(() => {
  useStylesScoped$(`
    .review {
      overflow: hidden;
      border-radius: 10px;
      box-shadow: 3px 13px 21px -3px rgba(161,161,161,0.4);

      &:nth-child(4), &:nth-child(5), &:nth-child(6) {
        display: none;
      }

      @media (width > 650px) {
        &:nth-child(4) {
          display: block;
        }
      }

      @media (width > 1200px) {
        &:nth-child(4), &:nth-child(5), &:nth-child(6) {
          display: block;
        }
      }
    }

    .visual {
      position: relative;
      aspect-ratio: 3/2;
      background-color: #525252;
    }

    .copy {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2em 1.5em;
      letter-spacing: -0.07em;

      > div {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: auto;
        -webkit-line-clamp: 5;
      }

      > div > p {
        margin-block: 1em;
      }

      > b {
        font-size: 1.3em; 
        line-height: 1.2;
      }

      &.expanded > div {
        -webkit-line-clamp: 100;
      }
    }

    button {
      margin-top: .5em;
      padding: 0;
      background-color: transparent;
      border: none;
      outline: none;
      font-weight: 700;
    }

    dialog {
      max-width: 40.125em;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 3em 2em;
    }
  `)

  const { dialogRef, isShown, showDialog } = useDialog()

  return (
    <div class="review">
      <div class="visual"></div>
      <div class="copy">
        <Slot />
        <button type="button" onClick$={() => showDialog()}>continue reading...</button>
      </div>
      {isShown && <dialog ref={dialogRef}>
        <p>I am delighted to share my experience working with our talented interior designer, Moon, during the renovation of our apartment. Her exceptional skills and creative vision have truly left us in awe. She provide us with a beautifully designed space, but they also managed the project efficiently, keeping everything on track and within our budget. Her clear communication and problem-solving skills made the entire process stress-free and enjoyable. I wholeheartedly recommend our interior designer to my friends who seeking to enhance their living space with a touch of creativity and professionalism.</p>
      </dialog>}
    </div>
  )
})