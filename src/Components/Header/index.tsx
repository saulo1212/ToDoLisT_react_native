import { useState } from "react";
import { TextInput, View, TouchableOpacity, Text, Alert } from "react-native";
import { Logo } from './logo';

import { styles } from './styles';

interface IHeaderProps {
    addTask: (title:string) => void;
}

export const Header: React.FC<IHeaderProps> = ({addTask}) => {

    const [text, setText] = useState("");

    const handleTaskAdd = () => {
        if(!text)
            return Alert.alert('Atenção', 'Campo titulo vazio')
       addTask(text);
       setText("");
    }
    return (
        <View style={styles.header}>
            <Logo />

            <View style={styles.barraDeFerramenta}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicionar uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setText}
                    value={text}
                />

                <TouchableOpacity style={styles.button}  onPress={handleTaskAdd} >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}