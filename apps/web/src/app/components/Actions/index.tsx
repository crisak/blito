'use client'

import { headerUIActions } from '@/redux/slices'

import { Button } from '@nextui-org/button'

import { IoIosAddCircleOutline } from 'react-icons/io'
import { useDispatch } from 'react-redux'

// const List = styled('ul', {
//   padding: '10px 0px',
//   listStyle: 'none',
//   margin: '0',
//   borderRadius: '$xs',
//   '&.actions li:not(:last-child)': {
//     paddingRight: '1.5rem'
//   },
//   '&.content-right': {
//     display: 'flex',
//     justifyContent: 'flex-end'
//   },
//   '& li': {
//     display: 'inline',
//     fontSize: '18px'
//   },
//   '& li+li:before': {
//     padding: '8px',
//     color: '$primary'
//   },
//   '& li a': {
//     color: '$primary',
//     textDecoration: 'none'
//   },
//   '& li a:hover': {
//     color: '$primarySolidHover',
//     textDecoration: 'underline'
//   }
// })

export type ActionsProps = {
  showButtonSave?: boolean
}

const Actions = ({ showButtonSave }: ActionsProps) => {
  const dispatch = useDispatch()

  const handleCreate = () => {
    dispatch(headerUIActions.setEventCreate())
  }

  const isShowActionSave =
    showButtonSave === undefined ||
    showButtonSave === null ||
    showButtonSave === true

  return (
    <div className="actions">
      {isShowActionSave && (
        <li>
          <Button
            size="sm"
            startContent={<IoIosAddCircleOutline size="1.2rem" />}
            color="primary"
            onPress={handleCreate}
          >
            Agregar
          </Button>
        </li>
      )}
    </div>
  )
}

export default Actions
