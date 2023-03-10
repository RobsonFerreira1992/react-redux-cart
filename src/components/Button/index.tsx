import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from 'react'
import * as S from './styles'


type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  add?: boolean
  size?: 'small' | 'medium'
  icon?: JSX.Element
  children: ReactNode
  as?: React.ElementType
  onClick?: () => void
} & ButtonTypes
const Button  = ({add,size, icon, children,onClick}: ButtonProps) => (
  <S.Wrapper
    size={size}
    hasIcon={!!icon}
    add={add}
    onClick={onClick}
  >
    {icon && <>
    <span>{icon}</span>
    </>}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
