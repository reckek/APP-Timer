import { CSSObject, css } from '@emotion/css'
import { FC, PropsWithChildren } from 'react'

type LayoutFlex = {
  type: 'flex'
} & Pick<
  CSSObject,
  'flexDirection' | 'justifyContent' | 'alignContent' | 'alignItems'
>

type LayoutProps = Pick<CSSObject, 'gap'> & LayoutFlex

export const Layout: FC<PropsWithChildren<Partial<LayoutProps>>> = (props) => {
  const {
    type = 'flex',
    flexDirection,
    alignContent,
    alignItems,
    justifyContent,
    gap,
    children,
  } = props

  const stylesMap = {
    flex: {
      flexDirection: flexDirection ?? 'row',
      justifyContent: justifyContent ?? 'flex-start',
      alignContent: alignContent ?? 'flex-start',
      alignItems: alignItems ?? 'stretch',
      gap: gap ?? 0,
    },
  }

  return <div className={css(stylesMap[type])}>{children}</div>
}
