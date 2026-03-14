import { FlatList, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { List, Text, Searchbar, Divider, Avatar, Surface } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Alumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [buscaAlumno, setBuscaAlumno] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setAlumnos([
        { nombre: 'CANDELARIA MORA SAMANTHA', matricula: '2114354' },
        { nombre: 'CANTU SILVA JAVIER', matricula: '2111889' },
        { nombre: 'CARMONA LOZANO ANGEL EMILIANO', matricula: '2069119' },
        { nombre: 'CASTILLO ACOSTA JORGE', matricula: '2132842' },
        { nombre: 'DAVILA GONZALEZ ALDO ADRIAN', matricula: '1994122' },
        { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018230' },
        { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '21045641' },
        { nombre: 'FLORES LÓPEZ DIEGO', matricula: '2066033' },
        { nombre: 'FLORES MARTINEZ ERICK ADRIAN', matricula: '2132976' },
        { nombre: 'GARZA AVALOS DIEGO', matricula: '2066114' },
        { nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL', matricula: '2031243' },
        { nombre: 'GRANJA PEÑA DIEGO', matricula: '20647331' },
        { nombre: 'IBARRA RODRIGUEZ ALEXIS', matricula: '20312431' },
        { nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN', matricula: '2064733' },
        { nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA', matricula: '2094647' },
        { nombre: 'MIRELES VELAZQUEZ ALEJANDRO', matricula: '2005102' },
        { nombre: 'MONSIVAIS SALAZAR ANDRES', matricula: '2064574' },
        { nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA', matricula: '2024783' },
        { nombre: 'PEÑA MUNGARRO LUIS ANGEL', matricula: '2066077' },
        { nombre: 'PUENTE REYNOSO JULIO CESAR', matricula: '2092151' },
        { nombre: 'RAMIREZ LOPEZ BRYAN', matricula: '2103708' },
        { nombre: 'RAMOS AVILA LILIANA VALERIA', matricula: '2115192' },
        { nombre: 'RICO JAUREGUI MAURICIO', matricula: '2037503' },
        { nombre: 'RIVERA LUNA ADRIAN', matricula: '2131513' },
        { nombre: 'RIVERA REYNA JOSE EMILIO', matricula: '2013503' },
        { nombre: 'RODRIGUEZ OLVERA ROSA ISELA', matricula: '2004613' },
        { nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL', matricula: '2133022' },
        { nombre: 'SANCHEZ GALARZA JUAN CARLOS', matricula: '2026061' },
        { nombre: 'SOLIS ORTIZ ALFREDO', matricula: '2095320' },
        { nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL', matricula: '2025350' },
        { nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL', matricula: '2103895' },
        { nombre: 'ZACATENCO OLIVE RODRIGO', matricula: '1857791' },
        { nombre: 'ZAVALA CANTU TERESA MARGARITA', matricula: '2025218' }
      ]);
    }, 2000);
  }, []);

  const alumnosFiltrados = alumnos.filter(alumno => 
    alumno.nombre.toLowerCase().includes(buscaAlumno.toLowerCase()) ||
    alumno.matricula.includes(buscaAlumno)
  );

  if (!alumnos.length) {
    return (
      <View style={styles.center}>
        <Text variant="bodyLarge">Cargando alumnos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Surface style={styles.header} elevation={1}>
        <Searchbar
          placeholder="Buscar alumno o matrícula"
          onChangeText={setBuscaAlumno}
          value={buscaAlumno}
          style={styles.searchbar}
        />
      </Surface>

      <FlatList
        data={alumnosFiltrados}
        keyExtractor={(item, index) => item.matricula + index}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <List.Item
            title={item.nombre}
            titleStyle={styles.title}
            description={`Matrícula: ${item.matricula}`}
            descriptionStyle={styles.description}
            left={props => (
              <Avatar.Icon 
                {...props} 
                icon="account" 
                size={48} 
                style={styles.avatar} 
              />
            )}
            right={props => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Alumno seleccionado:', item.nombre)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.center}>
            <Text variant="labelLarge">No se encontraron resultados</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 5,
  },
  searchbar: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    color: '#666',
  },
  avatar: {
    backgroundColor: '#6200ee', // Color temático
  }
});
