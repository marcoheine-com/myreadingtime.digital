import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()
const history = createMemoryHistory()

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
})
global.crypto.subtle = {}

const Wrappers = ({ children }) => (
  <Router history={history}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </Router>
)

const customRender = (ui) => render(ui, { wrapper: Wrappers })

export * from '@testing-library/react'

export { customRender as render }
