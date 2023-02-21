import { View, Text} from "react-native";
import { Clipboard } from './clipboard';
import { styles } from './styles';

export const Empty = () => {
    return (
        <View style={styles.semTarefas}>
            <Clipboard />
            <Text style={styles.empty}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.empty}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}