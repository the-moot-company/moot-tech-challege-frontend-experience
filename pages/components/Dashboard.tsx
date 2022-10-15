import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

import { useState } from 'react'

import { nanoid } from 'nanoid'
import GridLayout, { WidthProvider } from 'react-grid-layout'

import { Widget, BoxType, CreateWidgetModal } from '@components/index'

const GridLayoutWithProvider = WidthProvider(GridLayout)

const Dashboard: React.FC<{}> = () => {
  const [elements, setElements] = useState<
    { id: string; type: BoxType; value: string }[]
  >([])

  const handleGenerateElement = (value: string, boxType: BoxType) => {
    setElements((prevState) => [
      ...prevState,
      {
        id: nanoid(),
        type: boxType,
        value,
      },
    ])
  }

  return (
    <div className="h-full overflow-scroll">
      <GridLayoutWithProvider
        cols={12}
        isResizable
        rowHeight={30}
        className="mb-8"
      >
        {elements.map((el) => (
          <div key={el.id} data-grid={{ x: 0, y: 0, w: 5, h: 6 }}>
            <Widget source={el.type === 'iframe' ? el.value : ''}>
              {el.type === 'plain-text' && el.value}
            </Widget>
          </div>
        ))}
      </GridLayoutWithProvider>
      <CreateWidgetModal onGenerate={handleGenerateElement} />
    </div>
  )
}

export default Dashboard
