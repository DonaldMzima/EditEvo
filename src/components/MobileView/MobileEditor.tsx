import { fabric } from 'fabric'
import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { StoreContext } from '../../../store'
import { ElementsPanel } from '../panels/ElementsPanel'
import { TimeLine } from '../TimeLine'
import { Resources } from '../Resources'
import { Menu } from '../Menu'

const MobileEditor = observer(() => {
  const store = React.useContext(StoreContext)

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      height: 400,
      width: 200,
      backgroundColor: '#ededed',
    })
    fabric.Object.prototype.transparentCorners = false
    fabric.Object.prototype.cornerColor = '#00a0f5'
    fabric.Object.prototype.cornerStyle = 'circle'
    fabric.Object.prototype.cornerStrokeColor = '#0063d8'
    fabric.Object.prototype.cornerSize = 10

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
    <div className="grid grid-cols-12 gap-2 text-center py-2 md:py-8">
      <div className="col-span-3">
        <Menu />
      </div>
      <div className="col-span-3">
        <Resources />
      </div>
      <div
        className="col-span-6 text-center py-2 md:py-8"
        id="grid-canvas-container"
      >
        <canvas id="canvas" />
        <div className="col-span-6 ">
          <TimeLine />
        </div>
        <div className="col-span-7">
          <ElementsPanel />
        </div>
      </div>

      <footer className="col-span-12 text-center py-2 md:py-8 bg-cover footer">
        <p>
          Developed by{' '}
          <a
            href="https://donald-portfolio-beta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Donald Mzima
          </a>{' '}
          @{new Date().getFullYear()}
          <a
            href="https://github.com/DonaldMzima/EditEvo"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-[hsla(231,71%,59%,1)] hover:underline"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  )
})

export default MobileEditor
