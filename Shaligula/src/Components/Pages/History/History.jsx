import { ScrollView, Text } from "react-native";
import { HistoryElement } from "../../Utils/HistoryElement/HistoryElement";
import { styles } from "./History.style";

export const History = () => {

    const history = [];

    for(let index = 0; index < 20; index++) {
        history.push(<HistoryElement />);
    }

    return (
        <ScrollView style={styles.container}>
            {history}
        </ScrollView>
    )

}