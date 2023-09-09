## Implement nested array form
https://codesandbox.io/s/react-hook-form-usefieldarray-nested-arrays-m8w6j
```tsx
<div className="social-by-container flex flex-col">
  <AnimatePresence>
    {currentSocials.map(({ id: socialId }, indexSocial) => (
      <motion.div
        className="social-by-item mt-unit-lg gap-unit-lg flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        key={socialId}
      >
        <Dropdown radius="sm">
          <DropdownTrigger>
            <Button
              variant="bordered"
              isIconOnly={Boolean(currentSocials?.[indexSocial]?.type)}
            >
              {currentSocials?.[indexSocial]?.type ? (
                <IconSocial socialType={currentSocials[indexSocial].type} />
              ) : (
                'Red social'
              )}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Dropdown menu with icons"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={new Set([currentSocials[indexSocial].type])}
            onSelectionChange={(data) => {
              if (data instanceof Set) {
                const value = Array.from(data)[0] as TypeSocialNetwork

                setFormData(
                  'socials',
                  currentSocials.map((social) => {
                    if (socialId === social.id) {
                      return {
                        ...social,
                        type: value
                      }
                    }
                    return social
                  })
                )
              }
            }}
          >
            {optionsSocialNetwork.map(({ key, icon: IconSocial, label }) => (
              <DropdownItem
                key={key}
                startContent={<IconSocial className={iconSocialClasses} />}
              >
                {label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Input
          isRequired
          label="Usuario"
          size="sm"
          // @ts-ignore
          {...register(`socials[${indexSocial}].username`, {
            required: 'Este campo es requerido',
            maxLength: {
              value: 100,
              message: 'El valor no puede ser mayor a 100 caracteres'
            }
          })}
          // @ts-ignore
          {...inputProps(`socials[${indexSocial}].username`)}
        />

        <Input
          isRequired
          label="Url"
          size="sm"
          // @ts-ignore
          {...register(`socials[${indexSocial}].url`, {
            required: 'Este campo es requerido',
            maxLength: {
              value: 100,
              message: 'El valor no puede ser mayor a 100 caracteres'
            }
          })}
          // @ts-ignore
          {...inputProps(`socials[${indexSocial}].url`)}
        />

        <Button
          isIconOnly
          color="danger"
          variant="light"
          onClick={() => {
            setFormData(
              'socials',
              currentSocials.filter((_) => {
                return _.id !== socialId
              })
            )
          }}
        >
          <VscTrash />
        </Button>
      </motion.div>
    ))}
  </AnimatePresence>
</div>
```
