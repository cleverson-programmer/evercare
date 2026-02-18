interface VideoMaskProps {
  src: string
  maskSrc: string
  className?: string
}

export function VideoMask({
  src,
  maskSrc,
  className = "",
}: VideoMaskProps) {
  return (
    <div
      className={`relative size-full ${className}`}
      style={{
        WebkitMaskImage: `url(${maskSrc})`,
        maskImage: `url(${maskSrc})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "right center",
        maskPosition: "right center",
      }}
    >
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={src} />
      </video>
    </div>
  )
}
