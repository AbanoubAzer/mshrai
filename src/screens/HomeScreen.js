import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import SearchHeader from '../components/SearchHeader';
import CardCars from '../components/CardCars';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  const getCars = async () => {
    try {
      const response = await fetch(
        'https://admin.mshrai.com/api/search?lang=ar',
        {
          headers: {
            accept: 'application/json, text/plain, /',
            'accept-language': 'en-US,en;q=0.9,ar;q=0.8',
            'content-type': 'application/json',
            'sec-ch-ua':
              '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-gpc': '1',
          },
          referrer: 'https://mshrai.com/',
          referrerPolicy: 'strict-origin-when-cross-origin',
          body: '{"query":{"page":2,"model_year":[{"min":1990,"max":2023}],"sort":{"order":"desc","column":"date"}},"filter":false}',
          method: 'POST',
          mode: 'cors',
          credentials: 'omit',
        },
      );
      const json = await response.json();
      const car = json.data.response.docs;
      setData(car);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <HomeHeader />
      <SearchHeader />
      <View style={{flex: 8, marginTop: 10}}>
        <FlatList
          data={data}
          renderItem={({item}) => <CardCars item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
