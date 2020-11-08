import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2d2c2d',
    maxWidth: '100%',
  },
  title: {
    fontSize: 32,
    marginVertical: 20,
    fontFamily: 'Nunito_700Bold',
    color: 'rgb(63,94,251)',
    textAlign: 'center',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cleanButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    marginLeft: 5,
    backgroundColor: '#000',
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#2d2c2d',
    width: 300,
    paddingHorizontal: 20,
    fontSize: 18,
    height: 50,
  },
  
  btnPress:{
    width: 165,
    height: 55,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNormal: {
    width: 150,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'rgb(63,94,251)',
    borderColor: 'rgb(63,94,251)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Nunito_700Bold',
  },
  listText:{
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'Poppins_400Regular',
  },
  containerItem: {
    width: 300,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  btnItem:{
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(63,94,251,0.4)'
  },
  item: {
    fontSize: 22,
    color: '#F9f9f9',
    fontFamily: 'Poppins_400Regular',
  },
  containerModalize:{
    flex: 1,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgModalize: {
    fontSize: 22,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 10,
  },
  btnDelete:{
    backgroundColor: '#fc466b',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    marginRight: 10,
    elevation: 11,

  },
  btnModalizeText: {
    color: '#FFF',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
  }

  
});


export default style;