export function htmlToObject(html: string): Element {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const rootElement = doc.body.firstElementChild as Element

  return rootElement
}

