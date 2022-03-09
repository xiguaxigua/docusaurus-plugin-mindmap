/* eslint-disable @typescript-eslint/no-non-null-assertion */
import BrowserOnly from '@docusaurus/BrowserOnly'
import React, { FC, memo, useCallback, useEffect } from 'react'
import jsmind from 'jsmind'
import { convertData, debounce } from './utils/convert-data'

import './index.css'
import 'jsmind/style/jsmind.css'

interface DrawioProps {
  content: string
}

const Mindmap: FC<DrawioProps> = ({ content }) => {
  const mindmap = React.useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState(0)

  const genMap = useCallback(
    debounce(() => {
      mindmap.current!.innerHTML = ''
      const mind = {
        meta: { name: '', author: '', version: '' },
        format: 'node_tree',
        data: convertData(content),
      }
      const options = {
        container: mindmap.current,
        editable: false,
        theme: 'primary',
      }
      // eslint-disable-next-line new-cap
      const jm = new jsmind(options)
      jm.show(mind)
      const { w: canvasWidth } = jm.view.size
      const { width } = mindmap.current.getBoundingClientRect()
      let ratio = 1
      if (canvasWidth > width && canvasWidth / width < 2) {
        ratio = width / canvasWidth
      }
      jm.view.setZoom(ratio)
      setHeight(jm.view.size.h * ratio + 5)
    }, 300),
    [content]
  )

  useEffect(() => {
    genMap()

    window.addEventListener('resize', genMap)

    return () => {
      window.removeEventListener('resize', genMap)
    }
  }, [content])

  return (
    <div
      ref={mindmap}
      style={{ height }}
      className="docusaurus-plugin-mindmap"
    ></div>
  )
}

const Wrapper: FC<DrawioProps> = ({ content }) => {
  console.log(jsmind)
  return (
    <BrowserOnly fallback={<>loading...</>}>
      {() => <Mindmap content={content} />}
    </BrowserOnly>
  )
}

export default memo(Wrapper)
