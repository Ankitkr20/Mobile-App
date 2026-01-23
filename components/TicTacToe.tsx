import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    FlatList,
    Pressable,
  } from 'react-native';
  import React, { useState } from 'react';
  import Snackbar from 'react-native-snackbar';
  import Icons from './Icons';
  import { SafeAreaView } from 'react-native-safe-area-context';
  
  type CellValue = 'empty' | 'cross' | 'circle';
  
  export default function TicTacToe() {
    const [isCross, setIsCross] = useState<boolean>(false);
    const [gameWinner, setGameWinner] = useState<string>('');
    const [gameState, setGameState] = useState<CellValue[]>(
      new Array(9).fill('empty'),
    );
  
    const reloadGame = () => {
      setIsCross(false);
      setGameWinner('');
      setGameState(new Array(9).fill('empty'));
    };
  
    const checkIsWinner = (state: CellValue[]) => {
      const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (const [a, b, c] of winPatterns) {
        if (
          state[a] !== 'empty' &&
          state[a] === state[b] &&
          state[a] === state[c]
        ) {
          setGameWinner(`${state[a]} won the game! 🥳`);
          return;
        }
      }
  
      if (!state.includes('empty')) {
        setGameWinner('Draw game... ⌛️');
      }
    };
  
    const onChangeItem = (index: number) => {
      if (gameWinner) {
        return Snackbar.show({
          text: gameWinner,
          backgroundColor: '#000',
          textColor: '#fff',
        });
      }
  
      if (gameState[index] !== 'empty') {
        return Snackbar.show({
          text: 'Position is already filled',
          backgroundColor: 'red',
          textColor: '#fff',
        });
      }
  
      // ✅ IMMUTABLE UPDATE (important)
      const newGameState = [...gameState];
      newGameState[index] = isCross ? 'cross' : 'circle';
  
      setGameState(newGameState);
      setIsCross(!isCross);
      checkIsWinner(newGameState);
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
  
        {gameWinner ? (
          <View style={[styles.playerInfo, styles.winnerInfo]}>
            <Text style={styles.winnerTxt}>{gameWinner}</Text>
          </View>
        ) : (
          <View
            style={[
              styles.playerInfo,
              isCross ? styles.playerX : styles.playerO,
            ]}
          >
            <Text style={styles.gameTurnTxt}>
              Player {isCross ? 'X' : 'O'}'s Turn
            </Text>
          </View>
        )}
  
        <FlatList
          data={gameState}
          numColumns={3}
          keyExtractor={(_, index) => index.toString()}
          style={styles.grid}
          renderItem={({ item, index }) => (
            <Pressable
              style={styles.card}
              onPress={() => onChangeItem(index)}
            >
              <Icons name={item} />
            </Pressable>
          )}
        />
  
        {gameWinner !== '' && (
          <Pressable style={styles.gameBtn} onPress={reloadGame}>
            <Text style={styles.gameBtnText}>Restart Game</Text>
          </Pressable>
        )}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    playerInfo: {
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 14,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
    },
    gameTurnTxt: {
      fontSize: 20,
      color: '#fff',
      fontWeight: '600',
    },
    playerX: {
      backgroundColor: '#38CC77',
    },
    playerO: {
      backgroundColor: '#F7CD2E',
    },
    grid: {
      margin: 12,
    },
    card: {
      height: 100,
      width: '33.33%',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#333',
    },
    winnerInfo: {
      backgroundColor: '#38CC77',
    },
    winnerTxt: {
      fontSize: 20,
      color: '#fff',
      fontWeight: '600',
      textTransform: 'capitalize',
    },
    gameBtn: {
      alignItems: 'center',
      padding: 12,
      borderRadius: 8,
      marginHorizontal: 36,
      marginVertical: 16,
      backgroundColor: '#8D3DAF',
    },
    gameBtnText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: '500',
    },
  });
  