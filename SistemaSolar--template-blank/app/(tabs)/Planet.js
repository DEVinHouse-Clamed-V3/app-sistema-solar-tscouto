import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';

export function Planetas({ planeta }) {
  return (
    <ScrollView>
      <View style={styles.containerBody}>
        <View style={styles.containerPost}>
          <Text style={styles.stylesNamePlanet}>{planeta.nome}</Text>
          <Image style={styles.imagePlanet} source={{ uri: planeta.img }} />
        </View>
        <View style={styles.stylesDescription}>
          <View>
            <Text style={styles.styleTextDescription}>
              Average Orbital Speed
            </Text>
            <Text style={styles.styleTextDescription}>Satellites</Text>
            <Text style={styles.styleTextDescription}>Surface Area</Text>
            <Text style={styles.styleTextDescription}>Rotation Period</Text>
          </View>
          <View style={styles.styleValuesPlanet}>
            <Text style={styles.stylesText}>
              {planeta.velocidadeOrbitalMediaKmS}
            </Text>
            <Text style={styles.stylesText}>{planeta.quantidadeSatelites}</Text>
            <Text style={styles.stylesText}>{planeta.areaSuperficieKm2}</Text>
            <Text style={styles.stylesText}>{planeta.quantidadeSatelites}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerBody: {
    backgroundColor: 'black',
    width: '100%',
    padding: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  containerPost: {
    flex: 1,
    alignItems: 'center',
  },
  imagePlanet: {
    width: 100,
    height: 100,
  },
  stylesDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
    width: '100%',
    marginTop: 20,
  },

  styleValuesPlanet: {
    alignItems: 'end',
  },

  stylesNamePlanet: {
    fontSize: 20,
    color: 'white',
  },
  stylesText: {
    color: 'white',
    fontSize: 15,
  },

  styleTextDescription: {
    fontSize: 15,
    color: '#d2cfcf94',
  },
});
