import * as React from 'react'
import styles from './styles.module.css'

//@ts-ignore
import styled from 'styled-components'

interface Props {
  text: string
  bgColor: string
  textColor: string
  textWeight: number
  textSize: number
  isShadow: boolean
  shadowColor: string
  isGradient: boolean
  isOutlined: boolean
  isRounded: boolean
  gradColor1: string
  gradColor2: string
  gradDirection: string
}

export const ButtonComponent = ({
  text,
  textColor,
  bgColor,
  textWeight,
  textSize,
  isShadow,
  shadowColor,
  isRounded,
  isGradient,
  isOutlined,
  gradColor1,
  gradColor2,
  gradDirection
}: Props) => {
  let btnDesign = null

  const BasicButton = styled.button`
    color: ${textColor};
    background-color: ${bgColor};
    font-weight: ${textWeight};
    font-size: ${textSize}px;
  `
  const GradientBtn = styled.button`
    color: ${textColor};
    font-weight: ${textWeight};
    font-size: ${textSize}px;
    background: linear-gradient(
      to ${gradDirection},
      ${gradColor1},
      ${gradColor2}
    );
  `

  const OutlinedBtn = styled.button`
    color: ${textColor};
    font-weight: ${textWeight};
    font-size: ${textSize}px;
    border: 2px solid ${textColor};
  `
  const shadow = { boxShadow: `0 5px 10px ${shadowColor}` }
  const noShadow = { boxShadow: `none` }
  {
    isGradient
      ? (btnDesign = (
          <GradientBtn
            className={`${styles.btnBasic}  ${
              isRounded ? styles.rounded : ' '
            }`}
            style={isShadow ? shadow : noShadow}
          >
            {text}
          </GradientBtn>
        ))
      : (btnDesign = (
          <BasicButton
            className={`${styles.btnBasic} ${
              isRounded ? styles.rounded : ' '
            }`}
            style={isShadow ? shadow : noShadow}
          >
            {text}
          </BasicButton>
        ))
  }
  {
    isOutlined
      ? (btnDesign = (
          <OutlinedBtn
            className={`${styles.btnBasic}  ${
              isRounded ? styles.rounded : ' '
            } `}
            style={isShadow ? shadow : noShadow}
          >
            {text}
          </OutlinedBtn>
        ))
      : ' '
  }
  return <div className='styles.container-div'>{btnDesign}</div>
}
