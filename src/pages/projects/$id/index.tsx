import { createFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$id/')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    if (!res.ok) throw new Error()

    const data = await res.json()
    return { data }
  },
  pendingComponent: () => <div> Loading ... </div>,
  errorComponent: () => <div> The have a error </div>,
})

function RouteComponent() {
  const { data } = useLoaderData({ from: '/projects/$id/' })
  const { id } = Route.useParams()

  return (
    <div>
      {data.title} , {id}{' '}
    </div>
  )
}
