import React from 'react'

import { ButtonComponent } from 'button'
import 'button/dist/index.css'

const App = () => {
  return (
    <ButtonComponent
      text='Create React Library Example 😄'
      textColor={'#000'}
      textSize={18}
      textWeight={800}
      bgColor={'#f4a261'}
      isShadow={false}
      isGradient={false}
      isRounded={true}
      isOutlined={true}
      shadowColor={'#48cae4'}
      gradColor1={'#2a9d8f'}
      gradColor2={'#48cae4'}
      gradDirection={'right'}
    />
  )
}

export default App
