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
    color: '#156eee',
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
    backgroundColor: '#000'
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
    width: 150,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#156eee',
    borderColor: '#156eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnNormal: {
    width: 150,
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#156eee',
    borderColor: '#156eee',
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
  },
  containerItem: {
    flex: 1,
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
    borderColor: '#156e',
    backgroundColor: '#2d2c2a'
  },
  item: {
    fontSize: 22,
    color: '#F9f9f9',
    fontFamily: 'Poppins_400Regular',
  },
  
});


export default style;