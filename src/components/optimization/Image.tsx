// import { component$ } from "@builder.io/qwik";

const Image = (
<picture>
  <source
    srcSet="/public/header/optimized/compressed/header1_0.25x.avif 400w,
            /public/header/optimized/compressed/header1_0.43x.avif 700w,
            /public/header/optimized/compressed/header1_0.63x.avif 1000w"
    sizes="(max-width: 700px) 400px,
            (max-width: 1000px) 700px,
            1000px"
    src="/public/header/optimized/compressed/header1_0.63x.avif"
    type="image/avif" />
  <source
    srcSet="/public/header/optimized/compressed/header1_0.25x.webp 400w,
            /public/header/optimized/compressed/header1_0.43x.webp 700w,
            /public/header/optimized/compressed/header1_0.63x.webp 1000w"
    sizes="(max-width: 700px) 400px,
            (max-width: 1000px) 700px,
            1000px"
    src="/public/header/optimized/compressed/header1_0.63x.webp"
    type="image/webp" />
  <img 
    srcSet="/public/header/optimized/header1@0.25x.png 400w,
            /public/header/optimized/header1@0.43x.png 700w,
            /public/header/optimized/header1@0.63x.png 1000w"
    sizes="(max-width: 700px) 400px,
           (max-width: 1000px) 700px,
           1000px"
    src="/public/header/optimized/header1@0.63x.png" 
    alt="members of the team"
    width={2016}
    height={1344} />
</picture>)

export default Image
// export default component$(() => {
//   return <picture>
//       <img 
//         srcSet="/public/header/optimized/header1@0.25x.png 400w,
//                 /public/header/optimized/header1@0.43x.png 700w,
//                 /public/header/optimized/header1@0.63x.png 1000w"
//         sizes="(max-width: 700px) 400px,
//                (max-width: 1000px) 700px,
//                1000px"
//         src="/public/header/optimized/header1@0.63x.png" 
//         alt="members of the team"/>
//   </picture>;
// })