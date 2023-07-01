import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../constants/theme/colors';

const Calculadora = () => {
  const [sexo, setSexo] = useState(null);
  const [edad, setEdad] = useState(null);
  const [diabetes, setDiabetes] = useState(null);
  const [fumador, setFumador] = useState(null);
  const [colesterol, setColesterol] = useState(null);
  const [hdl, setHdl] = useState(null);
  const [sistolica, setSistolica] = useState(null);
  const [diastolica, setDiastolica] = useState(null);

  const [activoMan, setActivoMan] = useState(false);
  const [activoWoman, setActivoWoman] = useState(false);

  const onHandleSexo = (sexo) => {
    setSexo(sexo);
    if (sexo === 'hombre') {
      setActivoMan(false);
      setActivoWoman(true);
    } else if (sexo === 'mujer') {
      setActivoWoman(false);
      setActivoMan(true);
    }
  };

  const onHandleFumador = (fumador) => {
    setFumador(fumador);
  };
  const onHandleDiabetes = (diabetes) => {
    setDiabetes(diabetes);
  };

  const [resultado, setResultado] = useState(null);

  const onHandleCalcular = () => {
    let ptEdad;
    let ptDiabetes;
    let ptFumador;
    let ptColesterol;
    let ptHdl;
    let ptSistolica;
    let ptDiastolica;
    //Determinar riesgo
    let riesgoTotal;

    if (sexo === 'hombre') {
      //Calcular puntos por edad
      if (edad >= 30 && edad <= 34) {
        ptEdad = -1;
      } else if (edad >= 35 && edad <= 39) {
        ptEdad = 0;
      } else if (edad >= 40 && edad <= 44) {
        ptEdad = 1;
      } else if (edad >= 45 && edad <= 49) {
        ptEdad = 2;
      } else if (edad >= 50 && edad <= 54) {
        ptEdad = 3;
      } else if (edad >= 55 && edad <= 59) {
        ptEdad = 4;
      } else if (edad >= 60 && edad <= 64) {
        ptEdad = 5;
      } else if (edad >= 65 && edad <= 69) {
        ptEdad = 6;
      } else if (edad >= 70 && edad <= 74) {
        ptEdad = 7;
      }
      // Calcular puntos por Diabetes
      if (diabetes) {
        ptDiabetes = 2;
      } else {
        ptDiabetes = 0;
      }
      //Calcular puntos por Fumador
      if (fumador) {
        ptFumador = 2;
      } else {
        ptFumador = 0;
      }
      //Calcular puntos por colesterol
      if (colesterol < 160) {
        ptColesterol = -3;
      } else if (colesterol > 160 && colesterol <= 200) {
        ptColesterol = 0;
      } else if (colesterol > 200 && colesterol <= 240) {
        ptColesterol = 1;
      } else if (colesterol > 240 && colesterol <= 280) {
        ptColesterol = 2;
      } else if (colesterol > 280) {
        ptColesterol = 3;
      }
      //Calcular puntos por colesterol HDL
      if (hdl < 35) {
        ptHdl = 2;
      } else if (hdl >= 35 && hdl <= 44) {
        ptHdl = 1;
      } else if (hdl >= 45 && hdl <= 49) {
        ptHdl = 0;
      } else if (hdl >= 50 && hdl <= 59) {
        ptHdl = 0;
      } else if (hdl >= 60) {
        ptHdl = -2;
      }
      //Calcular puntos por sistolica
      if (sistolica < 120) {
        ptSistolica = 0;
      } else if (sistolica >= 120 && sistolica <= 129) {
        ptSistolica = 0;
      } else if (sistolica >= 130 && sistolica <= 139) {
        ptSistolica = 0.5;
      } else if (sistolica >= 140 && sistolica <= 159) {
        ptSistolica = 1;
      } else if (sistolica > 160) {
        ptSistolica = 1.5;
      }
      //Calcular puntos por diastolica
      if (diastolica < 80) {
        ptDiastolica = 0;
      } else if (diastolica >= 80 && diastolica <= 84) {
        ptDiastolica = 0;
      } else if (diastolica >= 85 && diastolica <= 89) {
        ptDiastolica = 0.5;
      } else if (diastolica >= 90 && diastolica <= 99) {
        ptDiastolica = 1;
      } else if (diastolica > 100) {
        ptDiastolica = 1.5;
      }
      console.log(
        'Puntos obtenidos',
        ptEdad,
        ptDiabetes,
        ptFumador,
        ptColesterol,
        ptHdl,
        ptSistolica,
        ptDiastolica
      );

      const sf =
        ptEdad + ptDiabetes + ptFumador + ptColesterol + ptHdl + ptSistolica + ptDiastolica;

      console.log('Sumatoria de hombre', sf);

      //Seccionar por edades
      if (edad >= 30 && edad <= 34) {
        console.log('Edad 30-34');
        switch (true) {
          case sf <= 1:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 1 && sf < 1.6:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf > 1.5 && sf < 3.6:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 4 && sf < 26.5:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 35 && edad <= 39) {
        console.log('Edad 35-39');
        switch (true) {
          case sf <= 1 && sf <= 1.3:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 1.3 && sf < 1.7:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 1.7 && sf <= 3.3:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 3.3:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 40 && edad <= 44) {
        console.log('Edad 40-44');
        switch (true) {
          case sf <= 1 && sf <= 1.7:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 1.7 && sf < 2.4:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.4 && sf <= 3.3:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 4.3:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 45 && edad <= 49) {
        console.log('Edad 45-49');
        switch (true) {
          case sf <= 1 && sf <= 2.0:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 2.0 && sf < 2.6:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.5 && sf <= 3.3:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 3.3:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 50 && edad <= 54) {
        console.log('Edad 50-54');
        switch (true) {
          case sf <= 1 && sf <= 2.0:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 2.0 && sf < 2.7:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.7 && sf <= 3.2:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 3.3:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 55 && edad <= 59) {
        console.log('Edad 55-59');
        switch (true) {
          case sf <= 1 && sf <= 1.9:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 1.9 && sf < 2.3:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.3 && sf <= 2.9:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 2.9:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 60 && edad <= 64) {
        console.log('Edad 60-64');
        switch (true) {
          case sf <= 1 && sf <= 2.0:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 2.0 && sf < 2.5:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.5 && sf <= 3.1:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 3.2:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 65 && edad <= 69) {
        console.log('Edad 65-69');
        switch (true) {
          case sf <= 1 && sf <= 2.0:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 2.0 && sf < 2.6:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.7 && sf <= 3.1:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 3.2:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 70 && edad <= 74) {
        console.log('Edad 70-74');
        switch (true) {
          case sf <= 1 && sf <= 1.9:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 1.9 && sf < 2.3:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.3 && sf <= 2.8:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 2.9:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      }
      console.log('Riesgo nivel: ', riesgoTotal);
    } else if (sexo === 'mujer') {
      //Calcular puntos por edad
      if (edad >= 30 && edad <= 34) {
        ptEdad = -9;
      } else if (edad >= 35 && edad <= 39) {
        ptEdad = -4;
      } else if (edad >= 40 && edad <= 44) {
        ptEdad = 0;
      } else if (edad >= 45 && edad <= 49) {
        ptEdad = 3;
      } else if (edad >= 50 && edad <= 54) {
        ptEdad = 6;
      } else if (edad >= 55 && edad <= 59) {
        ptEdad = 7;
      } else if (edad >= 60 && edad <= 64) {
        ptEdad = 8;
      } else if (edad >= 65 && edad <= 69) {
        ptEdad = 8;
      } else if (edad >= 70 && edad <= 74) {
        ptEdad = 8;
      }
      // Calcular puntos por Diabetes
      if (diabetes) {
        ptDiabetes = 4;
      } else {
        ptDiabetes = 0;
      }
      //Calcular puntos por Fumador
      if (fumador) {
        ptFumador = 2;
      } else {
        ptFumador = 0;
      }
      //Calcular puntos por colesterol
      if (colesterol < 160) {
        ptColesterol = -2;
      } else if (colesterol > 160 && colesterol <= 200) {
        ptColesterol = 0;
      } else if (colesterol > 200 && colesterol <= 240) {
        ptColesterol = 1;
      } else if (colesterol > 240 && colesterol <= 280) {
        ptColesterol = 1;
      } else if (colesterol > 280) {
        ptColesterol = 3;
      }
      //Calcular puntos por colesterol HDL
      if (hdl < 35) {
        ptHdl = 5;
      } else if (hdl >= 35 && hdl <= 44) {
        ptHdl = 2;
      } else if (hdl >= 45 && hdl <= 49) {
        ptHdl = 1;
      } else if (hdl >= 50 && hdl <= 59) {
        ptHdl = 0;
      } else if (hdl >= 60) {
        ptHdl = -3;
      }
      //Calcular puntos por sistolica
      if (sistolica < 120) {
        ptSistolica = -1.5;
      } else if (sistolica >= 120 && sistolica <= 129) {
        ptSistolica = 0;
      } else if (sistolica >= 130 && sistolica <= 139) {
        ptSistolica = 0;
      } else if (sistolica >= 140 && sistolica <= 159) {
        ptSistolica = 1;
      } else if (sistolica > 160) {
        ptSistolica = 1.5;
      }
      //Calcular puntos por diastolica
      if (diastolica < 80) {
        ptDiastolica = -1.5;
      } else if (diastolica >= 80 && diastolica <= 84) {
        ptDiastolica = 0;
      } else if (diastolica >= 85 && diastolica <= 89) {
        ptDiastolica = 0;
      } else if (diastolica >= 90 && diastolica <= 99) {
        ptDiastolica = 1;
      } else if (diastolica >= 100) {
        ptDiastolica = 1.5;
      }
      console.log(
        'Puntos obtenidos',
        ptEdad,
        ptDiabetes,
        ptFumador,
        ptColesterol,
        ptHdl,
        ptSistolica,
        ptDiastolica
      );

      const sf =
        ptEdad + ptDiabetes + ptFumador + ptColesterol + ptHdl + ptSistolica + ptDiastolica;

      console.log('Sumatoria de Mujer', sf);

      //Seccionar por edades
      if (edad >= 30 && edad <= 34) {
        console.log('Edad 30-34');
        switch (true) {
          case sf <= 1:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 1 && sf < 1.6:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf > 1.5 && sf < 3.6:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 4 && sf < 26.5:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 35 && edad <= 39) {
        console.log('Edad 35-39');
        switch (true) {
          case sf <= 1 && sf <= 1.3:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 1.3 && sf < 1.7:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 1.7 && sf <= 3.3:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 3.3:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 40 && edad <= 44) {
        console.log('Edad 40-44');
        switch (true) {
          case sf <= 1 && sf <= 1.7:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 1.7 && sf < 2.4:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.4 && sf <= 3.3:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 4.3:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 45 && edad <= 49) {
        console.log('Edad 45-49');
        switch (true) {
          case sf <= 1 && sf <= 2.0:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 2.0 && sf < 2.6:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.5 && sf <= 3.3:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 3.3:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 50 && edad <= 54) {
        console.log('Edad 50-54');
        switch (true) {
          case sf <= 1 && sf <= 2.0:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 2.0 && sf < 2.7:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.7 && sf <= 3.2:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 3.3:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 55 && edad <= 59) {
        console.log('Edad 55-59');
        switch (true) {
          case sf <= 1 && sf <= 1.9:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 1.9 && sf < 2.3:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.3 && sf <= 2.9:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 2.9:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 60 && edad <= 64) {
        console.log('Edad 60-64');
        switch (true) {
          case sf <= 1 && sf <= 2.0:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 2.0 && sf < 2.5:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.5 && sf <= 3.1:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 3.2:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 65 && edad <= 69) {
        console.log('Edad 65-69');
        switch (true) {
          case sf <= 1 && sf <= 2.0:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 2.0 && sf < 2.6:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.7 && sf <= 3.1:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 3.2:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
      } else if (edad >= 70 && edad <= 74) {
        console.log('Edad 70-74');
        switch (true) {
          case sf <= 1 && sf <= 1.9:
            riesgoTotal = 'Riesgo Bajo';
            break;
          case sf > 1.9 && sf < 2.3:
            riesgoTotal = 'Riesgo en el Limite';
            break;
          case sf >= 2.3 && sf <= 2.8:
            riesgoTotal = 'Levemente por encima del límite de riesgo';
            break;
          case sf >= 2.9:
            riesgoTotal = 'Riesgo Alto';
            break;
          default:
            console.log('Algo va mal!!');
        }
        console.log('Riesgo nivel: ', riesgoTotal);
      }
    }

    setResultado(riesgoTotal);
  };

  const onHandleReiniciar = () => {
    setResultado(null);
    setSexo(null);
    setEdad(null);
    setDiabetes(null);
    setFumador(null);
    setColesterol(null);
    setHdl(null);
    setSistolica(null);
    setDiastolica(null);
    setActivoMan(null);
    setActivoWoman(null);
  };

  return !resultado ? (
    <View style={styles.container}>
      <Text style={styles.txtDesc}>
        A continuación, proporciona los siguientes datos para poder calcular el riesgo de su
        paciente.
      </Text>
      <ScrollView style={styles.dataCalculadora}>
        <View style={styles.row}>
          <Text style={styles.label}>Sexo</Text>
        </View>

        <View style={styles.rowBtns}>
          <TouchableOpacity style={styles.btnData} onPress={() => onHandleSexo('hombre')}>
            <View style={!activoMan ? styles.datoCalc : styles.datoCalc1}>
              <Ionicons name="md-man" size={100} color={COLORS.secondary} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnData} onPress={() => onHandleSexo('mujer')}>
            <View style={!activoWoman ? styles.datoCalc : styles.datoCalc1}>
              <Ionicons name="md-woman" size={100} color={COLORS.secondary} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Edad</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa edad"
            placeholderTextColor={COLORS.darkGray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setEdad(text)}
            value={edad}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Diabetes</Text>
        </View>
        <View style={styles.rowBtns}>
          <TouchableOpacity style={styles.btnData} onPress={() => onHandleDiabetes(true)}>
            <View style={diabetes ? styles.datoCalc : styles.datoCalc1}>
              <Text style={styles.labelBtn}>SI</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnData} onPress={() => onHandleDiabetes(false)}>
            <View style={!diabetes ? styles.datoCalc : styles.datoCalc1}>
              <Text style={styles.labelBtn}>NO</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Fumador</Text>
        </View>
        <View style={styles.rowBtns}>
          <TouchableOpacity style={styles.btnData} onPress={() => onHandleFumador(true)}>
            <View style={fumador ? styles.datoCalc : styles.datoCalc1}>
              <Text style={styles.labelBtn}>SI</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnData} onPress={() => onHandleFumador(false)}>
            <View style={!fumador ? styles.datoCalc : styles.datoCalc1}>
              <Text style={styles.labelBtn}>NO</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Colesterol</Text>
          <TextInput
            style={styles.input}
            placeholder="Colesterol total"
            placeholderTextColor={COLORS.darkGray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setColesterol(text)}
            value={colesterol}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Colesterol HDL</Text>
          <TextInput
            style={styles.input}
            placeholder="Colesterol HDL total"
            placeholderTextColor={COLORS.darkGray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setHdl(text)}
            value={hdl}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Presión Arterial</Text>
          <TextInput
            style={styles.input}
            placeholder="Sistólica"
            placeholderTextColor={COLORS.darkGray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setSistolica(text)}
            value={sistolica}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Diastólica"
            placeholderTextColor={COLORS.darkGray}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setDiastolica(text)}
            value={diastolica}
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.contBtnCalc}>
          <TouchableOpacity style={styles.btnCalcular} onPress={onHandleCalcular}>
            <Text style={styles.txtCalcular}>OBTENER PUNTAJE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.contResultado}>
        <Text style={styles.txtResultado}>{resultado}</Text>
        <Button title="REINICIAR" onPress={onHandleReiniciar} />
      </View>
    </View>
  );
};

export default Calculadora;
