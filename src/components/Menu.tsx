'use client'
import React from 'react'
import { observer } from 'mobx-react'
import {
  MdDownload,
  MdVideoLibrary,
  MdImage,
  MdTransform,
  MdTitle,
  MdAudiotrack,
  MdOutlineFormatColorFill,
  MdMovieFilter,
} from 'react-icons/md'
import { UserButton } from '@clerk/nextjs'
import { StoreContext } from '../../store'
import { Store } from '../../store/Store'
import OnboardingSteps from './steps'

export const Menu = observer(() => {
  const store = React.useContext(StoreContext)

  return (
    <>
      <ul className="bg-white h-full world">
        {MENU_OPTIONS.map((option) => {
          const isSelected = store.selectedMenuOption === option.name
          return (
            <>
              <OnboardingSteps />
              <li
                key={option.name}
                className={`h-[72px] w-[72px] flex flex-col items-center video justify-center ${
                  isSelected ? 'bg-slate-200' : ''
                }`}
              >
                <button
                  onClick={() => option.action(store)}
                  className={`flex flex-col items-center`}
                >
                  <option.icon size="20" color={isSelected ? '#000' : '#444'} />
                  <div
                    className={`text-[0.6rem] hover:text-black ${
                      isSelected ? 'text-black' : 'text-slate-600'
                    }`}
                  >
                    {option.name}
                  </div>
                </button>
              </li>
            </>
          )
        })}
      </ul>
      <div className="flex justify-center">
        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  )
})

const MENU_OPTIONS = [
  {
    name: 'Video',
    icon: MdVideoLibrary,
    action: (store: Store) => {
      store.setSelectedMenuOption('Video')
    },
    className: 'video',
  },
  {
    name: 'Audio',
    icon: MdAudiotrack,
    action: (store: Store) => {
      store.setSelectedMenuOption('Audio')
    },
    className: 'audio',
  },
  {
    name: 'Image',
    icon: MdImage,
    action: (store: Store) => {
      store.setSelectedMenuOption('Image')
    },
    className: 'image',
  },
  {
    name: 'Text',
    icon: MdTitle,
    action: (store: Store) => {
      store.setSelectedMenuOption('Text')
    },
    className: 'texts',
  },
  {
    name: 'Animation',
    icon: MdTransform,
    action: (store: Store) => {
      store.setSelectedMenuOption('Animation')
    },
    className: 'animation',
  },
  {
    name: 'Effect',
    icon: MdMovieFilter,
    action: (store: Store) => {
      store.setSelectedMenuOption('Effect')
    },
    className: 'effect',
  },
  {
    name: 'Fill',
    icon: MdOutlineFormatColorFill,
    action: (store: Store) => {
      store.setSelectedMenuOption('Fill')
    },
    className: 'fill',
  },
  {
    name: 'Export',
    icon: MdDownload,
    action: (store: Store) => {
      store.setSelectedMenuOption('Export')
    },
    className: 'export',
  },
]
