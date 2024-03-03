import { LinkButton } from "@web/ui/components/Button"

interface Props {
  header: string
  pathname: string
  query: string
}

export default async function MediaHeader({ header, pathname, query }: Props) {
  return (
    <div className="flex w-full flex-row justify-between">
      <p className="text-primary-bg text-2xl font-bold capitalize">{header}</p>
      <LinkButton
        href={{
          pathname,
          query: {
            ...(query ? { query } : {}),
          },
        }}
        size="lg"
        variant="primary"
      >
        More
      </LinkButton>
    </div>
  )
}
