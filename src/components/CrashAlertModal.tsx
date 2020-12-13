import React from 'react'
import { Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Center } from './Center'

type Props = {
  visible: boolean
  onConfirm: () => void
}

export const CrashAlertModal: React.FC<Props> = ({ visible, onConfirm }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <Center>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>You pressed the crash button</Text>
          <Text style={styles.modalMessage}>Forgive self?</Text>

          <TouchableHighlight style={styles.modalButton} onPress={onConfirm}>
            <Text style={styles.modalButtonText}>Yes</Text>
          </TouchableHighlight>
        </View>
      </Center>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 12,
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    elevation: 2,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
