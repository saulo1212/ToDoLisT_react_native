import { Alert, StatusBar, View } from 'react-native';
import { StyleSheet } from "react-native";
import { generateUUID } from './src/helpers/uuid';

import { Header, Tarefas } from "./src/Components";
import { useState } from 'react';

export interface ITarefa {
  id: string;
  title: string;
  isCompleted: boolean;
}


export default function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);


  const addTask = (title: string) => {

    const novaTarefa = {
      id: generateUUID(),
      title: title,
      isCompleted: false
    }

    setTarefas([
      ...tarefas, novaTarefa
    ])
  }

  const realizarTarefa = (id:string) => {
     const tarefaRealizada = tarefas.map(tarefaAtual => {

      if(tarefaAtual.id === id)
        return {
          ...tarefaAtual,
          isCompleted: !tarefaAtual.isCompleted
        }

        return tarefaAtual;
     })

     setTarefas(tarefaRealizada);
  }

  const deleteTarefa = (id:string) => {
    const tarefaDeletada = tarefas.filter(tarefaAtual => tarefaAtual.id !==id);

    setTarefas(tarefaDeletada);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle='light-content' translucent />
      <Header addTask={addTask} />
      <Tarefas
        tarefas={tarefas}
        onComplete={realizarTarefa}
        onDelete={deleteTarefa}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    height: '100%'
  }
})

