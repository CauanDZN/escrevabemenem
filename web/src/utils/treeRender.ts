import { ReactElementGenerator } from "./ReactElementGenerator";

export function treeRender(node: Element, reactNode: ReactElementGenerator<keyof JSX.IntrinsicElements>) {
  const childNodes = node.childNodes;

  childNodes.forEach((childNode) => {
    if (childNode instanceof Element) {
      const tagName = childNode.tagName.toLowerCase() as keyof JSX.IntrinsicElements;
      const reactChildElement = new ReactElementGenerator(tagName);

      for (let n = 0; n < childNode.attributes.length; n++) {
        const attribute = childNode.attributes.item(n);

        if (attribute) {
          const attributeName = attribute.name;
          const attributeValue = attribute.value;

          reactChildElement.appendProps({ [attributeName]: attributeValue });
        }
      }

      if (childNode.childNodes) {
        treeRender(childNode, reactChildElement);
      }

      reactNode.appendChild(reactChildElement.build());
    }
  });
};