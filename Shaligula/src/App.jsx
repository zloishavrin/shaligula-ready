import { View, SafeAreaView, StatusBar } from 'react-native';
import { styles } from './AppStyle';
import { Navigation } from './Components/Layout/Navigation/Navigation';
import { History } from './Components/Pages/History/History';
import { useState } from 'react';

function App() {

    const [page, setPage] = useState(<History />);

    const openHistory = () => setPage(<History />);

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
            />
        </SafeAreaView>
    );
  }
  
  export default App;
  