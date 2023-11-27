// import { component$ } from "@builder.io/qwik";

// const Image = (
// <img
//     srcSet="/header/optimized/compressed/header1_0.25x.webp 400w,
//             /header/optimized/compressed/header1_0.43x.webp 700w,
//             /header/optimized/compressed/header1_0.63x.webp 1000w"
//     // sizes="(min-width: 1000px) 1000px,
//     //        (min-width: 700px) 700px,
//     //        400px"
//     alt="members of the team"
//     width={2016}
//     height={1344}
//     // fetchPriority="high"
//     loading="eager"
//     decoding="async" />)
const Image = (
<img
    srcSet="/header/header1/header1_200.webp 200w,
            /header/header1/header1_400.webp 400w,
            /header/header1/header1_600.webp 600w,
            /header/header1/header1_800.webp 800w,
            /header/header1/header1_1000.webp 1000w,
            /header/header1/header1_1200.webp 1200w,
            /header/header1/header1_1400.webp 1400w,
            /header/header1/header1_1600.webp 1600w,
            /header/header1/header1_1800.webp 1800w,
            /header/header1/header1_2000.webp 2000w,
            /header/header1/header1_2200.webp 2200w,
            /header/header1/header1_2400.webp 2400w,
            /header/header1/header1_2600.webp 2600w,
            /header/header1/header1_2800.webp 2800w,
            /header/header1/header1_3000.webp 3000w,
            /header/header1/header1_3200.webp 3200w"
    sizes="(max-width: 414px) 382.25px,
           (max-width: 768px) 664.175px,
           1199.97px"
    alt="members of the team"
    width={3200}
    height={2133}
    loading="eager"
    decoding="async" />)

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