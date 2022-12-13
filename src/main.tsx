import { Router } from '@reach/router'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Home, Old, SuperPerformance } from './page'

createRoot(document.querySelector('#smart-map-renderer') as HTMLElement).render(
  <React.StrictMode>
    <div>

      <Router>
        <Home path="/" />
        <SuperPerformance path="/super-performance/:howMany" />
        <Old path="/old/:howMany" />
      </Router>
    </div>
  </React.StrictMode>
)
