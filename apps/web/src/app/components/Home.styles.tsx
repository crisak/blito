'use client'
import clsx from "clsx"

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
    className={clsx(
      'text-white flex justify-center items-center p-0.3 rounded-full',
      className
    )}
    {...props}
  />
)
