import { heading } from 'libmask/mask'

export const Logo = () =>
  heading()
    .text('Mask')
    .class(
      'm-2 text-4xl uppercase font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 inline-block'
    )
