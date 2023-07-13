export type Component<T = unknown, R extends Unit = any> = (properties?: T) => R
export type Unit =
  | Mask
  | Component<unknown>
  | Array<Unit>
  | HTMLElement
  | DocumentFragment

export class Mask {
  private node: Node

  constructor(unit: Unit) {
    if (unit instanceof Mask) this.node = unit.element
    else if (unit instanceof HTMLElement) this.node = unit
  }

  mountAtDocumentBody() {
    document.body.appendChild(this.node)
  }

  get element() {
    return this.node as HTMLElement
  }

  text(content: string) {
    this.element.textContent = content
    return this
  }

  click(callback: () => void) {
    this.element.addEventListener('click', callback)
    return this
  }

  class(...expressions: Array<unknown>) {
    this.element.className = expressions
      .flat()
      .filter(Boolean)
      .map(String)
      .join('')
    return this
  }

  append(...units: Array<Unit>) {
    units.forEach(unit => this.element.append(render(unit)))
    return this
  }

  ref(callback: (mask: Mask) => void) {
    callback(this)
    return this
  }

  data(key: string, value: string) {
    this.element.dataset[key] = value
    return this
  }

  attribute(key: string, value: string) {
    this.element.setAttribute(key, value)
    return this
  }
}

export const effect = <T>(callback: () => Promise<T>) => {
  return callback()
}

export const render = (...units: Array<Unit>) => {
  const fragment = document.createDocumentFragment()
  units.forEach(unit => {
    let node: Node
    if (unit instanceof HTMLElement) node = unit
    else if (unit instanceof Mask) node = unit.element
    else if (unit instanceof DocumentFragment) node = unit
    else if (Array.isArray(unit)) node = render(...unit)
    else node = render(unit())
    fragment.appendChild(node)
  })
  return fragment
}

export const bootstrap = (unit: Unit) => document.body.appendChild(render(unit))

export const n = (unit: Unit) => new Mask(unit)

export const fragment = () => n(document.createDocumentFragment())

export const element = (name = 'div') => n(document.createElement(name))

export const div = (...expressions: Array<unknown>) =>
  element().class(expressions)

export const p = (content?: string) => element('p').text(content)

export const button = (label?: string) => element('button').text(label)

export const heading = (content?: string, level = 1) =>
  element(`h${level}`).text(content)

export const code = (content?: string) => element('code').text(content)

export const i = (content?: string) => element('i').text(content)

export const a = (href?: string, content?: string) =>
  element('a').text(content).attribute('href', href)
