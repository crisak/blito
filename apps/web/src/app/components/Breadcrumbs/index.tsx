'use client'

import { styled } from '@nextui-org/react'
import Link from 'next/link'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

const List = styled('ul', {
  padding: '10px 0px',
  listStyle: 'none',
  margin: '0',
  borderRadius: '$xs',
  '&.content-right': {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  '& li': {
    display: 'inline',
    fontSize: '.875rem'
  },
  '&.breadcrumbs li+li:before': {
    content: '/'
  },
  '& li+li:before': {
    padding: '8px',
    color: '$primary'
  },
  '& li a': {
    color: '$primary',
    textDecoration: 'none'
  },
  '& li a:hover': {
    color: '$primarySolidHover',
    textDecoration: 'underline'
  }
})

export type BreadcrumbsProps = {
  links: Array<{ href?: string; label: string }>
}

const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
  const lastItem = links.length

  return (
    <Container>
      <List className="breadcrumbs">
        {links.map(({ href, label }, index) => {
          if (lastItem === index + 1) {
            return <li key={href + label}>{label}</li>
          }

          if (href) {
            return (
              <li key={href + label}>
                <Link href={href}>{label}</Link>
              </li>
            )
          }
          return
        })}
      </List>
    </Container>
  )
}

export default Breadcrumbs
