import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';


import { styles } from './styles';

interface ITarefaCardsProps  {
    id: string;
    name: string;
    active: boolean;
    onComplete: (id: string) => void;
    onDelete: (id:string) => void;
}

export const TarefasCard: React.FC<ITarefaCardsProps> = ({ id, name, active,onComplete,onDelete }) => {

    const [isCompleted, setIsCompleted] = useState(active);

    const handleTaskDelete = () => onDelete(id);

    const handleToogletasg = () => {
        onComplete(id)
        setIsCompleted(!isCompleted)
    }

    return (
        <View key={id} style={styles.container}>
            <Checkbox
                value={isCompleted}
                onValueChange={handleToogletasg}
                color={isCompleted ? '#5E60CE' : '#0063BF'}
                style={styles.check}
            />
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity onPress={handleTaskDelete} >
                <AntDesign name="delete" size={24} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}