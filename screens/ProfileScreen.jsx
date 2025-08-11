import { StyleSheet, View, Text } from 'react-native';
import { useTasks } from '../contexts/TaskContext';
export default function ProfileScreen() {
    const { theme } = useTasks();
    return (
        <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
            <Text style={[styles.title, theme === 'dark' && styles.darkText]}>Perfil do Usuário</Text>
            <Text style={[styles.text, theme === 'dark' && styles.darkText]}>
                Nome: Usuário Exemplo
            </Text>
            <Text style={[styles.text, theme === 'dark' && styles.darkText]}>
                Email: usuario@exemplo.com
            </Text>
            <Text style={[styles.text, theme === 'dark' && styles.darkText]}>
                Tarefas Concluídas: (baseado no TaskContext)
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    darkContainer: {
        backgroundColor: '#333',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    text: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    darkText: {
        color: '#fff'
},
});