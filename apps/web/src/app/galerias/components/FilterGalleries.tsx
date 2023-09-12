'use client'
import { Input } from '@nextui-org/input'
import { ScrollShadow, Select, SelectItem } from '@nextui-org/react'
import { VscSearch } from 'react-icons/vsc'
import { animals } from './data'

const FilterGalleries = () => {
  return (
    <ScrollShadow
      className="filter-galleries flex flex-col items-center gap-unit-lg px-unit-0 sm:flex-row-reverse"
      hideScrollBar
    >
      <Input
        className="sm:max-w-[170px]"
        type="search"
        size="lg"
        placeholder="Nombre de proyecto"
        variant="underlined"
        isClearable
        startContent={
          <VscSearch className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
        }
        fullWidth
      />
      {/* <div className="filters-select flex w-full gap-unit-lg"> */}
      <Select
        label="Favorite Animal"
        selectionMode="multiple"
        className="sm:max-w-[170px]"
        variant="underlined"
        fullWidth
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Favorite Animal"
        selectionMode="multiple"
        className="sm:max-w-[170px]"
        variant="underlined"
        fullWidth
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Favorite Animal"
        selectionMode="multiple"
        className="sm:max-w-[170px]"
        variant="underlined"
        fullWidth
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
    </ScrollShadow>
  )
}

export default FilterGalleries
