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
    srcSet="/header/optimized/header1_200.jpg 200w,
            /header/optimized/header1_400.jpg 400w,
            /header/optimized/header1_600.jpg 600w,
            /header/optimized/header1_800.jpg 800w,
            /header/optimized/header1_1000.jpg 1000w,
            /header/optimized/header1_1200.jpg 1200w,
            /header/optimized/header1_1400.jpg 1400w,
            /header/optimized/header1_1600.jpg 1600w,
            /header/optimized/header1_1800.jpg 1800w,
            /header/optimized/header1_2000.jpg 2000w,
            /header/optimized/header1_2200.jpg 2200w,
            /header/optimized/header1_2400.jpg 2400w,
            /header/optimized/header1_2600.jpg 2600w,
            /header/optimized/header1_2800.jpg 2800w,
            /header/optimized/header1_3000.jpg 3000w,
            /header/optimized/header1_3200.jpg 3200w"
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