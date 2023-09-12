'use client'
import { Input } from '@nextui-org/input'
import { ScrollShadow, Select, SelectItem } from '@nextui-org/react'
import { VscSearch } from 'react-icons/vsc'
import { animals } from './data'

const FilterGalleries = () => {
  return (
    <ScrollShadow
      className="filter-galleries flex w-full flex-row-reverse items-center gap-unit-lg"
      hideScrollBar
      orientation="horizontal"
    >
      <Input
        className="mr-unit-1 max-w-xs"
        type="search"
        placeholder="Nombre de proyecto"
        isClearable
        startContent={
          <VscSearch className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
        }
      />
      {/* <div className="filters-select flex w-full gap-unit-lg"> */}
      <Select
        label="Favorite Animal"
        placeholder="Select an animal"
        selectionMode="multiple"
        className="max-w-[170px]"
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
        placeholder="Select an animal"
        selectionMode="multiple"
        className="max-w-[170px]"
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
        placeholder="Select an animal"
        selectionMode="multiple"
        className="max-w-[170px]"
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
