export default function optImg(
    src: string,
    width: number,
    height: number,
    sizes: [string, string, string],
    alt: string,
    eager?: boolean
) {
    const sizesStr = `(max-width:414px)${sizes[0]},(max-width:768px)${sizes[1]},${sizes[2]}`
    let srcStr = ''
    for (let x = 200; x <= width; x += 200) {
        srcStr += `${src}_${x}.webp ${x}w,`
    }

    return (
        <img
            src={`${src}_${width}.webp`}
            srcSet={srcStr}
            sizes={sizesStr}
            alt={alt}
            width={width}
            height={height}
            loading={eager ? "eager" : "lazy"}
            decoding="async" />
    )
}