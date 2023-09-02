'use client'

import { Hover } from '@/app/shared/ui'
import { useAuthStore } from '@/store'
import { Button, ButtonProps } from '@nextui-org/button'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineEdit } from 'react-icons/ai'

type ButtonEditAdminProps = ButtonProps & {
  icon?: React.ReactNode
  classNames?: { container?: string }
}

const ButtonEditAdmin = ({
  children,
  classNames,
  className,
  icon,
  ...props
}: ButtonEditAdminProps) => {
  const isAuthenticate = useAuthStore((state) => state.isAuthenticate)

  if (isAuthenticate) {
    return (
      <>
        <Hover>
          {({ isHover }) => {
            return (
              <div
                className={clsx(classNames?.container, {
                  'flex min-h-[32px] items-center gap-3': !classNames?.container
                })}
              >
                {children}

                {/* Show button when is a device mobile */}
                <Button
                  {...props}
                  className={clsx(className, 'sm:hidden')}
                  size="sm"
                  isIconOnly
                  color="primary"
                  aria-label="Editar tag"
                  variant="light"
                >
                  {icon || <AiOutlineEdit size={20} />}
                </Button>

                <AnimatePresence>
                  {isHover && (
                    <motion.span
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      // Hide button when is a device mobile
                      className="hidden sm:block"
                    >
                      <Button
                        {...props}
                        size="sm"
                        isIconOnly
                        color="primary"
                        aria-label="Editar tag"
                        variant="light"
                      >
                        {icon || <AiOutlineEdit size={20} />}
                      </Button>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            )
          }}
        </Hover>
      </>
    )
  }

  return children
}

export default ButtonEditAdmin
