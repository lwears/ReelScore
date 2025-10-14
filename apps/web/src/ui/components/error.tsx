interface Props {
  message: string
}

export default function ErrorDisplay({ message }: Props) {
  return (
    <div className="size-full">
      <p>{message}</p>
    </div>
  )
}
