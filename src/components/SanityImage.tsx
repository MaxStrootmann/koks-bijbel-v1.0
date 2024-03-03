import Image from 'next/image'
import { urlForImage } from '~/lib/sanity.image'

export default function SanityImage({
  value,
  isInline,
}: {
  value: any
  isInline: boolean
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
