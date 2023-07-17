import { useScreenNavigation } from '@/app/shared/hooks'
import { Button } from '@nextui-org/react'
import { FORM_TAGS } from './constants'

const List = () => {
  const screenNavigation = useScreenNavigation()

  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5 </li>
      <Button
        onClick={() => {
          screenNavigation.push(FORM_TAGS)
        }}
      >
        Crear item
      </Button>
    </ul>
  )
}
export default List
