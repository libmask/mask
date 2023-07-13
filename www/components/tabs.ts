import { Component, Mask, Unit, div } from 'libmask/mask'

export type TabProps = {}

export const tabs: Component<TabProps, Tabs> = () => {
  return new Tabs(div())
}

class Tabs extends Mask {
  header = div('flex')

  constructor(unit: Unit) {
    super(unit)
    this.append(this.header)
  }

  item(header: Unit, content: Unit) {
    this.header.append(header)
    return this
  }
}
