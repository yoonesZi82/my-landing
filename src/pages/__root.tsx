import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'
import type { QueryClient } from '@tanstack/react-query'
import { ThemeProvider } from '@/providers/theme-provider.tsx'
import Navbar from '@/components/layout/navbar/navbar.tsx'
import { Toaster } from '@/components/ui/sonner'
import Footer from '@/components/layout/footer/footer.tsx'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <Navbar />
        <main className="">
          <Outlet />
          <Toaster position="top-center" />
        </main>
        <Footer />
      </ThemeProvider>
      <TanStackRouterDevtools />
      <TanStackQueryLayout />
    </>
  ),
  pendingComponent: () => {
    ;<div className="bg-red-500 w-full h-50">loading ...</div>
  },
})
