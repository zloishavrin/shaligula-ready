import { View } from 'react-native';
import { styles } from './NavigationStyle';
import { NavigationButton } from '../../Utils/NavigationButton/NavigationButton';

export const Navigation = ({ openHistory, openSearch, openFavorite }) => {

    return (
        <View style={styles.navigation}>
            <NavigationButton 
                type="history"
                handler={openHistory}
            />
            <NavigationButton 
                type="search"
                handler={openSearch}
            />
            <NavigationButton 
                type="like"
                handler={openFavorite}
            />
        </View>
    )

}