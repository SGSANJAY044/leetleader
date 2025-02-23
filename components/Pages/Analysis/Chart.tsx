import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const ProblemSolvingStats = ({ solvedEasy, solvedMedium, solvedHard }: { solvedEasy: number, solvedMedium: number, solvedHard: number }) => {
  const data = [
    {
      name: 'Easy',
      count: solvedEasy,
      color: '#4CAF50',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Medium',
      count: solvedMedium,
      color: '#FFC107',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Hard',
      count: solvedHard,
      color: '#F44336',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <View>
      <PieChart
        data={data}
        width={Dimensions.get('window').width}
        height={250}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={'count'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        absolute
      />
    </View>
  );
};

export default ProblemSolvingStats;
