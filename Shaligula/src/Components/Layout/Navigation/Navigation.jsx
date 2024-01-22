import { View } from 'react-native';
import { styles } from './NavigationStyle';
import { NavigationButton } from '../../Utils/NavigationButton/NavigationButton';

export const Navigation = ({ openHistory }) => {

    return (
        <View style={styles.navigation}>
            <NavigationButton 
                type="history"
                handler={openHistory}
            />
            <NavigationButton 
                type="search"
            />
            <NavigationButton 
                type="like"
            />
        </View>
    )

}