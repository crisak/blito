'use client'

import { Text } from '@/app/shared/components'
import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter
} from '@nextui-org/react'
import { useState } from 'react'

export type StateAlert = {
  type: 'CONFIRM' | 'INFO'
  title: React.ReactNode | string
  body: React.ReactNode | string
  messageButtonAccept?: React.ReactNode | string
  messageButtonCancel?: React.ReactNode | string
  responseConfirm: boolean
  asyncFn: () => Promise<boolean>
}

type AlertProps = { bindings: ReturnType<typeof useDisclosure> } & StateAlert

const Alert = (props: AlertProps) => {
  const [loading, setLoading] = useState(false)

  const handlerCloseModel = async (response?: boolean) => {
    if (props.type === 'CONFIRM' && response) {
      setLoading(true)
      const response = await props.asyncFn()
      setLoading(false)

      /** Response ok */
      if (response) {
        /** Close modal */
        props.bindings.onClose()
      }

      return
    }

    props.bindings.onClose()
  }

  const displayFooter = () => {
    if (props.type === 'CONFIRM') {
      return (
        <ModalFooter>
          <Button
            variant="light"
            color="primary"
            onPress={() => handlerCloseModel(false)}
            disabled={loading}
          >
            {props.messageButtonCancel || 'Cancelar'}
          </Button>
          <Button
            color="primary"
            onPress={() => handlerCloseModel(true)}
            isLoading={loading}
          >
            {props.messageButtonAccept || 'Aceptar'}
          </Button>
        </ModalFooter>
      )
    }

    return (
      <ModalFooter>
        <Button color="primary" onPress={() => handlerCloseModel()}>
          {props.messageButtonAccept || 'Aceptar'}
        </Button>
      </ModalFooter>
    )
  }

  return (
    <Modal
      backdrop="blur"
      isDismissable={false}
      aria-labelledby={`modal-${props.title || 'label'}`}
      aria-describedby={`modal-${props.title || 'describe'}`}
      isOpen={props.bindings.isOpen}
      onOpenChange={props.bindings.onOpenChange}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader>
              <Text as="b" id="modal-title" className="ext-xl">
                {props.title}
              </Text>
              <hr />
            </ModalHeader>
            <ModalBody>{props.body}</ModalBody>
            {displayFooter()}
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default Alert
