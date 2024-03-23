interface Props {
  message: string
}

export default function Error({ message }: Props) {
  return (
    <div className="size-full">
      <p>{message}</p>
    </div>
  )
}
