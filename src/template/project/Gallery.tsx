import { type QRL, $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik"
import Img from "~/components/ultil/optimization/Img"
import useDialog from "~/hooks/useDialog"

export default component$(() => {
  useStylesScoped$(`
    section {
      text-align: center;
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
      cursor: pointer;
    }

    dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      line-height: 0;
      padding: 0;
      border: none;
      outline: none;
      background-color: transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;

      @media (orientation: landscape) {
        flex-direction: row;
      }
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.7);
    }

    dialog img {
      cursor: default;
      width: 90vw;
      height: auto;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;

      @media (orientation: landscape) {
        width: auto;
        height: 80vh;
      }
    }

    .arrows {
      width: 90%;
      display: flex;
      justify-content: space-between;

      @media (orientation: landscape) {
        display: none;
      }
    }

    dialog svg {
      color: white;
      background-color: white;
      border-radius: 10px;
      padding-inline: 10px;
      color: rgb(91 91 91);
      font-size: 40px;
      opacity: 0.6;
      cursor: pointer;
    }

    dialog > svg {
      display: none;

      @media (orientation: landscape) {
        display: block;
      }
    }
  `)
  const { dialogRef, isShown, showDialog } = useDialog()
  const targetSig = useSignal<number | null>(null)
  const clickImg = $((idx: number) => {
    targetSig.value = idx
    showDialog()
  })
  const moveLeft = $(() => {
    if (!targetSig.value) return
    if (targetSig.value === 1) {
      targetSig.value = 12
      return
    }
    targetSig.value = targetSig.value - 1
  })
  const moveRight = $(() => {
    if (!targetSig.value) return
    if (targetSig.value === 12) {
      targetSig.value = 1
      return
    }
    targetSig.value = targetSig.value + 1
    
  })

  return (
    <section class="fluid-section">
      <div class="gallery">
        <Img src="/trip/1" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(1))} />
        <Img src="/trip/2" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(2))} />
        <Img src="/trip/3" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(3))} />
        <Img src="/trip/4" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(4))} />
        <Img src="/trip/5" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(5))} />
        <Img src="/trip/6" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(6))} />
        <Img src="/trip/7" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(7))} />
        <Img src="/trip/8" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(8))} />
        <Img src="/trip/9" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(9))} />
        <Img src="/trip/10" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(10))} />
        <Img src="/trip/11" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(11))} />
        <Img src="/trip/12" sizes={['183.075px', '323.725px', '388.025px']} width={1000} height={1000} alt="company trip" onClick={$(() => clickImg(12))} />
      </div>
      {isShown &&<dialog ref={dialogRef}>
        <ArrowLeft callback={moveLeft} />
        <Img src={`/trip/${targetSig.value}`} sizes={['372.95px', '450.55px', '720px']} width={1000} height={1000} alt="company trip" />
        <ArrowRight callback={moveRight} />
        <div class="arrows">
          <ArrowLeft callback={moveLeft} />
          <ArrowRight callback={moveRight} />
        </div>
      </dialog>}
    </section>
  )
})

function ArrowLeft({ callback }: { callback: QRL<() => void> }) {
  return (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" onClick$={callback}><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path></svg>
  )
}

function ArrowRight({ callback }: { callback: QRL<() => void> }) {
  return (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" onClick$={callback}><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path></svg>
  )
}