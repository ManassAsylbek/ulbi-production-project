import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type PropsWithChildren } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme: AppLinkTheme
}

export const AppLink = (props: AppLinkProps & PropsWithChildren) => {
  const { className, theme, children, ...otherProps } = props

  return (
        <Link
          className={classNames(cls.appLink, {}, [className, cls[theme]])}
          {...otherProps}
        >
          {children}
      </Link>
  )
}
