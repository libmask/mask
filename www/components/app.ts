import { Component, a, button, code, div, heading, p } from 'libmask/mask'
import Header from './header'

const App: Component = () => [
  Header,
  div('container px-8 mx-auto').append(
    div('w-8/12 mx-auto text-center py-32').append(
      heading('Mask').class(
        'text-9xl font-black bg-gradient-to-br from-cyan-400 to-teal-400 bg-clip-text text-transparent inline-block tracking-tighter uppercase'
      ),
      heading('Expressive\nJavaScript\nFramework').class(
        'text-zinc-950 text-6xl font-black whitespace-pre'
      ),
      div('flex gap-x-8 justify-center items-center mt-16').append(
        a('https://github.com/libmask/mask').append(
          button('Get Started').class(
            'bg-indigo-600 text-xl text-white font-semibold px-8 py-4 rounded-xl hover:bg-indigo-800 transition-colors'
          )
        ),
        code('pnpm add github:libmask/mask').class(
          'text-zinc-950 text-xl font-mono bg-slate-50 p-4 rounded-xl border shadow-sm'
        )
      )
    ),
    div().append(
      heading('Features', 2).class('text-zinc-950 text-4xl font-black mb-4'),
      p(
        'Create applications using JavaScript, TypeScript, and your favorite build tool.'
      ).class('text-zinc-950 text-xl font-medium mb-2'),
      p(
        'No HTML. Just pure programmatic access to the DOM using the fluent Mask API.'
      ).class('text-zinc-950 text-xl font-medium mb-2'),
      p(
        'Works with some of the greatest libraries and frameworks like Tailwind CSS, Lucide, and more.'
      ).class('text-zinc-950 text-xl font-medium mb-2'),
      p(
        'Use Mask and accomplish more with less code. Mask is a lightweight framework is easy to learn and use.'
      ).class('text-zinc-950 text-xl font-medium mb-8'),
      a('https://github.com/libmask/mask')
        .class('block mb-16')
        .append(
          p('Please visit Mask at GitHub').class(
            'text-xl text-indigo-600 font-semibold decoration-2 hover:underline inline-block'
          )
        ),
      p(
        'Designed with Love in Virginia\nCopyright © 2023 Christoffer Hallas. All rights reserved.'
      ).class('text-sm text-zinc-400 text-center whitespace-pre')
    )
  )
]

export default App
