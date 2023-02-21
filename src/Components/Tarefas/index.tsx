import { View, Text, FlatList } from "react-native";
import { TarefasCard } from '../TarefasCard';
import {Empty} from './empty';
import {ITarefa} from '../../../App'
import { styles } from './styles';

interface ITarefasProps {
    tarefas: ITarefa[],
    onComplete: (id:string) => void;
    onDelete: (id:string) => void;
}

export const Tarefas: React.FC<ITarefasProps> = ({tarefas,onComplete,onDelete}) => {

    const tasksConclude = tarefas.filter(tarefaAtua => tarefaAtua.isCompleted).length

    return (
        <View style={styles.mainToDoList}>
            <View style={styles.progressoDeConlusao}>
                <View style={styles.info}>
                    <Text style={styles.create}>Criadas</Text>
                    <Text style={styles.count}>{tarefas.length}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.conclude}>Concluidas</Text>
                    <Text style={styles.count}>{tasksConclude}</Text>
                </View>
            </View>

            <View style={styles.conteudoTarefas}>
                <FlatList
                    data={tarefas}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <TarefasCard 
                            id={item.id} 
                            name={item.title} 
                            active={item.isCompleted} 
                            onComplete={onComplete}
                            onDelete={onDelete}
                        />
                    )}

                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => <Empty/> }
                />
            </View>

        </View>
    )
}