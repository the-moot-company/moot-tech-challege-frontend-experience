interface Props {
  source?: string
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  [rest: string]: any
}

export const Widget = ({ children, className, style, source, rest }: Props) => {
  return (
    <div
      {...rest}
      style={style}
      className={`${className} border border-black rounded-md bg-primary-content h-full w-full pb-4`}
    >
      {source ? (
        <iframe src={source} className="w-full h-full" />
      ) : (
        <>{children}</>
      )}
    </div>
  )
}
