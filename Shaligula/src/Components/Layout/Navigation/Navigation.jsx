import { View } from 'react-native';
import { styles } from './NavigationStyle';
import { NavigationButton } from '../../Utils/NavigationButton/NavigationButton';

export const Navigation = ({ active, openHistory, openSearch, openFavorite }) => {
    return (
        <View style={styles.navigation}>
            <NavigationButton
                type={active === 'history' ? 'historyActive' : 'history'}
                handler={openHistory}
            />
            <NavigationButton
                type={active === 'search' ? 'searchActive' : 'search'}
                handler={openSearch}
            />
            <NavigationButton 
                type={active === 'favorite' ? 'likeActive' : 'like'}
                handler={openFavorite}
            />
        </View>
    )
}