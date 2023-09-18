'use client'

import { useAuthStore } from '@/store'
import { Input } from '@nextui-org/input'
import { Select, SelectItem } from '@nextui-org/react'
import Link from 'next/link'
import { VscAdd, VscSearch } from 'react-icons/vsc'
import { animals } from './data'

const FilterGalleries = () => {
  const isAuthenticate = useAuthStore(({ isAuthenticate }) => isAuthenticate)
  return (
    <div className="filter-galleries flex flex-col items-center gap-unit-lg px-unit-0 sm:flex-row-reverse">
      {isAuthenticate && (
        <Link
          className="group relative z-0 box-border inline-flex h-unit-10 w-unit-10 min-w-unit-10 select-none appearance-none items-center justify-center gap-unit-2 overflow-hidden whitespace-nowrap rounded-medium bg-primary px-unit-0 text-small font-normal text-primary-foreground subpixel-antialiased outline-none tap-highlight-transparent transition-transform-colors hover:opacity-90 data-[focus-visible=true]:z-10 data-[pressed=true]:scale-[0.97] data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-focus motion-reduce:transition-none"
          href="/galerias/crear-galeria"
        >
          <VscAdd />
        </Link>
      )}

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
    </div>
  )
}

export default FilterGalleries
