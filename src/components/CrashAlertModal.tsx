import React, { useContext } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { CrashAnalyticsContext } from '../contexts/CrashAnalytics'
import { Button } from './Button'
import { Center } from './Center'

export const CrashAlertModal: React.FC = () => {
  const { lastSessionCrashed, resetLastSessionCrashed } = useContext(
    CrashAnalyticsContext,
  )

  return (
    <Modal animationType="fade" transparent={true} visible={lastSessionCrashed}>
      <Center>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>You pressed the crash button</Text>
          <Text style={styles.modalMessage}>Forgive self?</Text>
          <Button title="Yes" onPress={resetLastSessionCrashed} />
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
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
