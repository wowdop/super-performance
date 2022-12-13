import React from 'react'
import { createRoot } from 'react-dom/client'
import { SmartMapRenderer } from './component'

createRoot(document.querySelector('#smart-map-renderer') as HTMLElement).render(
  <React.StrictMode>
    <SmartMapRenderer />
  </React.StrictMode>
)
