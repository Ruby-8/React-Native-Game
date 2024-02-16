import { useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Colors';

/**
 * This is the main file to run the whole game.
 */
export default function App() {
  //initialize the variables
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  /**
   * Helper method to pass number to the startgame screen
   * @param {*} pickedNumber 
   */
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  /**
   * Helper method to pass the screen to gameover screen by setting the status into true
   */
  function gameOverHandler() {
    setGameIsOver(true);
  }

  /**
   * Helper method to start a new game when user click the replay button and initialize the status back to origin
   */
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  //first screen ----- StartGameScreen
  //pass pick number to start game screen
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  //second screen ----- GameScreen
  //if userNumber is not null then going to second screen
  //pass userNumber and onGameOver status to GameScreen
  if (userNumber) {
    screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />);
  }

  //third screen ------ GameOverScreen
  //After the gamescreen over, then going to the game over screen
  //Pass the userNumber and call helper method to re-initialize the variables
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <LinearGradient //The way to show the content in screen
      colors={[Colors.primary700, Colors.primary500]} style={styles.rootScreen}
    >
      <ImageBackground //Insert image in background
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView //To make the screen organize 
          style={styles.rootScreen}>{screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

//Here is the area for customizing styles for the components on related screen
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
