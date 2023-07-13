import { a, div, i, p } from 'libmask/mask'
import { Logo } from './logo'

const Header = () =>
  div(
    'overflow-hidden px-4 flex bg-gradient-to-r from-zinc-50 to-zinc-100 border-b-4 border-indigo-600 shadow-xl flex'
  ).append(
    div(
      'relative before:block before:absolute before:-inset-6 before:skew-x-12 before:shadow-xl before:bg-white mr-8'
    ).append(div('relative').append(Logo)),
    div('flex-grow flex justify-end items-center').append(
      a('https://github.com/libmask/mask').append(
        i().data('lucide', 'github').class('w-8 aspect-square text-black')
      )
    )
  )

export default Header
