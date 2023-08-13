'use client'
import classNames from 'classnames'

/**
 * Sections
 */

/**
 * Sections one header
 */

export const LinkSocial = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'a'>) => (
  <a
    className={classNames(
      'text-white flex justify-center items-center p-0.3 rounded-full',
      className
    )}
    {...props}
  />
)
