import { FlatList, View } from 'react-native'
import CompanyDetailComponent from '../../../components/company_detail_component';
import { styles } from './style';
import { COMPANY_DETAILS } from '../../../data/company_detail';
const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={COMPANY_DETAILS}
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