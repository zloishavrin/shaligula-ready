import { ScrollView } from "react-native";
import { HistoryElement } from "../../Utils/HistoryElement/HistoryElement";
import { styles } from "./History.style";
import { useResults } from "../../../Hooks/LocalStorage/useResults";
import { Error } from "../../Utils/Error/Error";

export const History = ({ openResults }) => {

    const { results } = useResults();

    if(results && !results.length) return <Error text={"Пока что у Вас нет истории пройденных тестов."} />

    return (
        <ScrollView style={styles.container}>
            {results && results.map(element => {
                return <HistoryElement 
                    key={element.id} 
                    element={element}
                    openResults={() => openResults(element)}
                />
            })}
        </ScrollView>
    )

}