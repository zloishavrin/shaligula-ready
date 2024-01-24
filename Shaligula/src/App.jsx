import { View, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import { styles } from './AppStyle';
import { Navigation } from './Components/Layout/Navigation/Navigation';
import { History } from './Components/Pages/History/History';
import { Search } from './Components/Pages/Search/Search';
import { Favorite } from './Components/Pages/Favorite/Favorite';
import { useState } from 'react';
import { Test } from './Components/Pages/Test/Test';

function App() {

    const [page, setPage] = useState(<Search />);
    const [test, setTest] = useState(null);

    const closeTest = () =>  setTest(null);
    const closeTestAndOpenHitsory = () => {
        setPage(<History />);
        setTest(null);
    }
    const openTest = (test) => setTest(<Test element={test} closeTest={closeTest} />);

    const openHistory = () => setPage(<History />);
    const openSearch = () => setPage(<Search openTest={openTest} />);
    const openFavorite = () => setPage(<Favorite openTest={openTest} />);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                animated={true}
                showHideTransition={'slide'}
                hidden={true}
            />

            {test ?  
                test
            : 
                <>
                    <View style={styles.page}>
                        {page}
                    </View>

                    <Navigation 
                        openHistory={openHistory}
                        openSearch={openSearch}
                        openFavorite={openFavorite}
                    />
                </>
            }
            
        </SafeAreaView>
    );
  }
  
  export default App;
  