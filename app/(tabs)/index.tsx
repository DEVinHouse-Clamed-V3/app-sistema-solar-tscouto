import { Image, StyleSheet, SafeAreaView, View, Text, ScrollView ,StatusBar, TouchableOpacity} from 'react-native';
import { planeta } from './planetas';
import { Planetas } from './Planet'
import { useState } from 'react';


export default function HomeScreen() {

  const [valuePlanet , setPlanet] = useState(0);


  // const next = () => {
  //   if (valuePlanet < planeta.length - 1) {
  //     setPlanet(valuePlanet + 1); // Incrementa o índice
  //   } else {
  //     setPlanet(0); // Retorna ao primeiro planeta
  //   }
  // };

  // // Função para voltar ao planeta anterior
  // const previous = () => {
  //   if (valuePlanet > 0) {
  //     setPlanet(valuePlanet - 1); // Decrementa o índice
  //   } else {
  //     setPlanet(planeta.length - 1); // Volta ao último planeta
  //   }
  // };

  function navigatePlanet (direction: 'next'| 'previous') {
    if (direction === 'next') {
      setPlanet((prevValue) => (prevValue < planeta.length - 1 ? prevValue + 1 : 0));
    } else if (direction === 'previous') {
      setPlanet((prevValue) => (prevValue > 0 ? prevValue - 1 : planeta.length - 1));
    }
  };
  



  return (
    <SafeAreaView  style={{flex: 1}}>
      <StatusBar backgroundColor="#af181833" />
      <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.styleText}>Vamos Explorar</Text>
        <Image style={styles.stylesImage} source={require('../../assets/images/logoBuzz.png')}>
        </Image>

        </View>
         <ScrollView >
          {
            <Planetas planeta={planeta[valuePlanet]}></Planetas>
            // planeta.map((planet, index) => (
            //   <Planetas key={index} planeta={planet}></Planetas>
            // ))
             
          }
        </ScrollView>
        <View style={styles.viewButton}>
    
         <TouchableOpacity   style={styles.styleButton}  onPress={()=> navigatePlanet('previous')} >
          <Text style={styles.colorTextButton}>Previos</Text>
         </TouchableOpacity>
         <TouchableOpacity  style={styles.styleButton}   onPress={()=> navigatePlanet('next')} >
          <Text style={styles.colorTextButton}>Next</Text>
         </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2B45",
    alignItems: 'center',
    padding:20
  },
  containerHeader: {
    alignItems:'center',
    marginTop:30,
    flexDirection:'row',
    gap:20,
    marginBottom:50
  },
  stylesImage: {
    width:50,
    height:50,
  },

  styleText: {
    fontSize:30,
    color:'white'
  },
  colorTextButton: {
     color:'white'
  },
  styleButton: {
    padding:20,
    backgroundColor:'#3370b699',
    borderRadius: 24
   
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribui os botões
    alignItems: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: '#1F2B45', // Mes
  }
});
