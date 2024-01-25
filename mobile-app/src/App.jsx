import { View, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import { styles } from './AppStyle';
import { Navigation } from './Components/Layout/Navigation/Navigation';
import { History } from './Components/Pages/History/History';
import { Search } from './Components/Pages/Search/Search';
import { Favorite } from './Components/Pages/Favorite/Favorite';
import { useState } from 'react';
import { Test } from './Components/Pages/Test/Test';
import { Results } from './Components/Pages/Results/Results';

function App() {

    const [test, setTest] = useState(null);
    const [results, setResults] = useState(null);

    const closeResults = () => setResults(null);
    const openResults = (results) => {
        setTest(null);
        setResults(<Results results={results} closeResults={closeResults} />);
    }

    const [page, setPage] = useState(<History openResults={openResults} />);

    const closeTest = () =>  setTest(null);
    const openTest = (test) => setTest(<Test element={test} closeTest={closeTest} openResults={openResults} />);

    const openHistory = () => setPage(<History openResults={openResults} />);
    const openSearch = () => setPage(<Search openTest={openTest} />);
    const openFavorite = () => setPage(<Favorite openTest={openTest} />);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar 
                animated={true}
                showHideTransition={'slide'}
                hidden={false}
                backgroundColor={'#191919'}
                barStyle={'light-content'}
            />

            {test ?  
                test
            : 

            results ?
                results
            :
                <>
                    <View style={styles.page}>
                        {page}
                    </View>

                    <Navigation 
                        active={
                            page.type == History ?
                                'history'
                            : page.type == Search ?
                                'search'
                            :
                                'favorite'
                        }
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
  