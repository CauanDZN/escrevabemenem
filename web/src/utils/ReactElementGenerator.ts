export interface ReactElement<P = any> {
  $$typeof: symbol;
  type: string | symbol | React.ComponentType<P> | null;
  key: string | number | null;
  ref: React.Ref<any> | null;
  props: {
    children?: ReactElement | ReactElement[];
    [key: string]: any;
  };
  _owner?: React.ElementType<any> | null;
  _store?: { validated: boolean };
}

export interface props {
  [key: string]: any;
}

export class ReactElementGenerator<T extends keyof JSX.IntrinsicElements> {
  private element: ReactElement = {
    $$typeof: Symbol.for('react.element'),
    type: null,
    key: null,
    ref: null,
    props: {},
  }

  constructor(type: T) {
    this.element = { ...this.element, type }
  }

  appendProps(props: object) {
    Object.entries(props).forEach(([key, value]) => this.element.props[key] = value)
    return this
  }

  appendChild(newChildElement: ReactElement<any>) {
    const { children } = this.element.props

    if (Array.isArray(children)) {
      this.element.props.children = [...children, newChildElement]
    } else if (children) {
      this.element.props.children = [children, newChildElement]
    } else {
      this.element.props.children = [newChildElement]
    }

    return this
  }

  appendChildren(newChildrenElement: ReactElement<any>[]) {
    const { children } = this.element.props

    if (Array.isArray(children)) {
      this.element.props.children = [...children, ...newChildrenElement]
    } else if (children) {
      this.element.props.children = [children, ...newChildrenElement]
    } else {
      this.element.props.children = [...newChildrenElement]
    }

    return this
  }

  getProps() {
    return this.element.props
  }

  getChildren() {
    return this.element.props.children
  }

  setProps(props: props) {
    this.element.props = props
    return this
  }

  setChildren(children: ReactElement[]) {
    this.element.props.children = [...children]
    return this
  }

  shareProps(externalProps: props) {
    const privateProps = this.element.props

    const privateKeys = Object.keys(privateProps);
    const externalKeys = Object.keys(externalProps);
    
    const sharedKeys = privateKeys.filter(key => externalKeys.includes(key));
    
    for (const key of sharedKeys) {
      if (privateProps[key] !== externalProps[key]) {
        return false;
      }
    }
    
    return true;
  }

  build() {
    return this.element
  }
}
