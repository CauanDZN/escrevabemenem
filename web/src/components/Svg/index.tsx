import { htmlToObject } from "../../utils/htmlToObject";
import { treeRender } from "../../utils/treeRender";
import { ReactElement, ReactElementGenerator } from "../../utils/ReactElementGenerator"
import { useState, useEffect } from "react"
import { CircleNotch } from "@phosphor-icons/react"

interface SvgProps {
  src: any;
  [key: string]: any;
}

export default function Svg({ src, ...props }: SvgProps) {
  const [svg, setSvg] = useState<ReactElementGenerator<any>>();
  const [svgXML, setSvgXML] = useState('');

  function deleteFillProp(childNode: ReactElement) {
    delete childNode.props.fill
    return childNode
  }

  async function fetchSVG() {
    try {
      const response = await fetch(src);
      const data = await response.text();
      return data
    } catch (error) {
      console.error('Error fetching SVG:', error);
    }
  }

  function processSvgDOM(xml: string) {
    const updatedSvg = new ReactElementGenerator('svg');
    const svgNode = htmlToObject(xml);

    for (let n = 0; n < svgNode.attributes.length; n++) {
      const attribute = svgNode.attributes.item(n);

      if (attribute) {
        const attributeName = attribute.name;
        const attributeValue = attribute.value;

        updatedSvg.appendProps({ [attributeName]: attributeValue });
      }
    }

    updatedSvg.appendProps(props);

    treeRender(svgNode, updatedSvg);

    const updatedSvgChildren = updatedSvg.getChildren() as ReactElement<any>[]
    const children = updatedSvgChildren.map(childNode => deleteFillProp(childNode))
    
    updatedSvg.setChildren(children)
    return updatedSvg
  }

  useEffect(() => {
    if (svg) {
      if (svg.shareProps(props)) return

      const updatedSvg = new ReactElementGenerator('svg')
      updatedSvg.appendProps({ ...svg.getProps(), ...props })

      setSvg(updatedSvg)
    } else {
      fetchSVG().then(data => setSvgXML(data as string));

      if (svgXML) {
        const updatedSvg = processSvgDOM(svgXML);
        setSvg(updatedSvg);
      }
    }
  }, [svgXML, props]);

  if (svg) {
    return svg.build();
  } else {
    return (
      <div className="flex flex-row justify-center items-center">
        <CircleNotch className="animate-spin text-zinc-300 dark:text-zinc-700" weight="regular" size={24} />
      </div>
    )
  }
}
