import { StyleSheet, FlatList, View } from 'react-native'
import { Company_Detail } from '../../Data/Company-Detail';
import CompanyDetailComponent from './CompanyDetailComponent';
const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={Company_Detail}
        renderItem={({ item }) =>
          <CompanyDetailComponent
            img={item.img}
            companyName={item.name}
            orderTime={item.orderTiming}
            workingTime={item.workingTiming}
            rating={item.rating}
            id={item.id}
          />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#eeeeee'
  },

})

export default HomeScreen;