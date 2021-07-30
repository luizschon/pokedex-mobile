import React from 'react'
import { Modal, ModalProps, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

type ModalViewProps = {
  children: React.ReactNode;
  closeModal: () => void 
} & ModalProps

export default function ModalView({ children, closeModal, ...rest }: ModalViewProps) {
  return <Modal transparent animationType="fade" statusBarTranslucent {...rest}>
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.overlay}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  </Modal>
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end"
  }
})
