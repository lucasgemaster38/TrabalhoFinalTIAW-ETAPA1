import { Image, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/galo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">CAM</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Clube Atlético Mineiro</ThemedText>
        <ThemedText>
          Honramos o nome de Minas!
        </ThemedText>
      </ThemedView>      
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        textAlign: 'center',
      },
      stepContainer: {
        gap: 8,
        marginBottom: 8,
      },
      reactLogo: {
        width: '90%', // Define a largura da imagem como 100% da tela
        height: 150,
        top: 70,
        aspectRatio: 0.81, // Mantém a proporção da imagem
        alignSelf: 'center',
      },
  });
  