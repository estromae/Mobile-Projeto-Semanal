import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  viewCalculator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    borderWidth: 1,
  },

  messageAlert: {
    color: 'red'
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
    
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default styles