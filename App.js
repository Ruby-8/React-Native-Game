import { useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Colors';

// Everytime Change Need To Save The File
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }
  //first screen ----- StartGameScreen
  let screen = <StartGameScreen onPickNumber= {pickedNumberHandler}/>;
  //second screen ----- GameScreen
  if (userNumber) {
    screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>);
  }
  //third screen ------ GameOverScreen
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} onStartNewGame={startNewGameHandler}/>;
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.primary500]} style={styles.rootScreen}>
      <ImageBackground 
      source={require('./assets/images/background.jpg')} 
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
