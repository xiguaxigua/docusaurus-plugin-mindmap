interface MindmapNode {
  id: string
  topic: string
  direction: 'left' | 'right'
  children?: MindmapNode[]
}

/**
 * 数据格式转化
 * @param content 原始数据
 * @returns
 */
function convertData(content: string) {
  if (!content) return ''
  const lines = content.split('\n').filter((v) => v)
  let result: MindmapNode = null
  const current: Record<number, MindmapNode> = {}
  lines.forEach((line) => {
    const [prefix, value] = line.split(/\s/)
    const direction = prefix.includes('l') ? 'left' : 'right'
    const nodeData: MindmapNode = { id: genId(), topic: value, direction }
    const level = prefix.replace('l', '').length
    current[level] = nodeData
    if (level === 1) {
      nodeData.id = 'root'
      result = nodeData
    } else {
      current[level - 1].children = current[level - 1].children || []
      current[level - 1].children.push(nodeData)
    }
  })
  return result
}

function genId() {
  return Math.random().toString(36).slice(2, 8)
}

function debounce(fn: VoidFunction, delay: number) {
  let timer: number | null = null
  return function (...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(self, args)
    }, delay) as unknown as number
  }
}

export { convertData, debounce }
