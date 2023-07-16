'use client'

import { Text } from '@/app/shared/components'
import { Button, Loading, Modal, useModal } from '@nextui-org/react'
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

type AlertProps = ReturnType<typeof useModal> & StateAlert

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
        props.setVisible(false)
      }

      return
    }

    props.setVisible(false)
  }

  const displayFooter = () => {
    if (props.type === 'CONFIRM') {
      return (
        <Modal.Footer>
          <Button
            light
            color="primary"
            auto
            onPress={() => handlerCloseModel(false)}
            disabled={loading}
          >
            {props.messageButtonCancel || 'Cancelar'}
          </Button>
          <Button
            color="primary"
            auto
            onPress={() => handlerCloseModel(true)}
            disabled={loading}
          >
            {loading && <Loading color="currentColor" size="sm" />}
            {!loading && (props.messageButtonAccept || 'Aceptar')}
          </Button>
        </Modal.Footer>
      )
    }

    return (
      <Modal.Footer>
        <Button color="primary" auto onPress={() => handlerCloseModel()}>
          {props.messageButtonAccept || 'Aceptar'}
        </Button>
      </Modal.Footer>
    )
  }

  return (
    <Modal
      blur
      closeButton
      preventClose
      aria-labelledby={`modal-${props.title || 'label'}`}
      aria-describedby={`modal-${props.title || 'describe'}`}
      onCloseButtonClick={handlerCloseModel}
      {...props.bindings}
    >
      <Modal.Header justify="flex-start">
        <Text b id="modal-title" size={20}>
          {props.title}
        </Text>
        <hr />
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      {displayFooter()}
    </Modal>
  )
}

export default Alert
