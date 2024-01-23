import { View, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import { styles } from './AppStyle';
import { Navigation } from './Components/Layout/Navigation/Navigation';
import { History } from './Components/Pages/History/History';
import { Search } from './Components/Pages/Search/Search';
import { Favorite } from './Components/Pages/Favorite/Favorite';
import { useState } from 'react';

function App() {

    const [page, setPage] = useState(<Search />);

    const openHistory = () => setPage(<History />);
    const openSearch = () => setPage(<Search />);
    const openFavorite = () => setPage(<Favorite />);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                animated={true}
                showHideTransition={'slide'}
                hidden={true}
            />

            <View style={styles.page}>
                {page}
            </View>

            <Navigation 
                openHistory={openHistory}
                openSearch={openSearch}
                openFavorite={openFavorite}
            />
        </SafeAreaView>
    );
  }
  
  export default App;
  