import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

const history = createMemoryHistory()

const Wrappers = ({ children }) => <Router history={history}>{children}</Router>

const customRender = (ui) => render(ui, { wrapper: Wrappers })

export * from '@testing-library/react'

export { customRender as render }
