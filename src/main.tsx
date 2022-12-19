import { Router } from '@reach/router'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { MegaSvg } from './component'
import { Home, Old, SuperPerformance } from './page'

createRoot(document.querySelector('#smart-map-renderer') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Router>
        <Home path="/" />
        <SuperPerformance path="/super-performance/:howMany" />
        <Old path="/old/:howMany" />
        <MegaSvg path="/mega-svg/:howMany" />
      </Router>
    </div>
  </React.StrictMode>
)
