'use client'

import { fabric } from 'fabric'
import React, { useEffect, useState } from 'react'

import { observer } from 'mobx-react'
import { Resources } from './Resources'
import { ElementsPanel } from './panels/ElementsPanel'
import { Menu } from './Menu'
import { TimeLine } from './TimeLine'
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import { StoreContext } from '../../store'
import { Store } from '../../store/Store'

export const EditorWithStore = () => {
  const [store] = useState(new Store())
  return (
    <StoreContext.Provider value={store}>
      <SignedIn>
        <Editor />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </StoreContext.Provider>
  )
}

export const Editor = observer(() => {
  const store = React.useContext(StoreContext)

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      height: 500,
      width: 800,
      backgroundColor: '#ededed',
    })
    fabric.Object.prototype.transparentCorners = false
    fabric.Object.prototype.cornerColor = '#00a0f5'
    fabric.Object.prototype.cornerStyle = 'circle'
    fabric.Object.prototype.cornerStrokeColor = '#0063d8'
    fabric.Object.prototype.cornerSize = 10
    // canvas mouse down without target should deselect active object
    canvas.on('mouse:down', function (e) {
      if (!e.target) {
        store.setSelectedElement(null)
      }
    })

    store.setCanvas(canvas)
    fabric.util.requestAnimFrame(function render() {
      canvas.renderAll()
      fabric.util.requestAnimFrame(render)
    })
  }, [store])

  return (
    <div className="grid grid-rows-[auto,1fr,20px] grid-cols-[72px,300px,1fr,250px] h-[100svh]">
      <div className="tile row-span-2 flex flex-col">
        <Menu />
      </div>
      <div className="row-span-2 flex flex-col overflow-scroll">
        <Resources />
      </div>
      <div
        id="grid-canvas-container"
        className="col-start-3 bg-slate-100 flex justify-center items-center"
      >
        <canvas id="canvas" className="h-[100%] w-full" />
      </div>
      <div className="col-start-4 row-start-1">
        <ElementsPanel />
      </div>
      <div className="col-start-3 row-start-2 col-span-2 relative px-[10px] py-[4px] overflow-scroll">
        <TimeLine />
      </div>
    </div>
  )
})
