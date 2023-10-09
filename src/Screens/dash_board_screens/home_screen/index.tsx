import { FlatList, View } from 'react-native'
import { Company_Detail } from '../../../Data/Company-Detail';
import CompanyDetailComponent from '../../../components/company_detail_component';
import { styles } from './style';
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


export default HomeScreen;