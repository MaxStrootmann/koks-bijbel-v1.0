import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

export default function SanityImage({
  image,
  width,
  height,
}: {
  image: any
  width: number
  height: number
}) {
  return (
    <Image
      className="card__cover"
      src={urlForImage(image).width(width).height(height).url()}
      height={height}
      width={width}
      alt=""
      sizes="100vw"
    />
  )
}
