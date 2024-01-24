import { SafeAreaView, ScrollView, Text, View, TouchableHighlight, Image } from "react-native"
import useGet from "../../../Hooks/Fetch/useGet"
import { Loader } from "../../Utils/Loader/Loader";
import { QuestElement } from "../../Utils/QuestElement/QuestElement";
import { Multiform } from "../../Utils/Multiform/Multiform";
import { NavigationButton } from "../../Utils/NavigationButton/NavigationButton";
import { styles } from "./Test.style";
import { useEffect, useState } from "react";
import { useResults } from "../../../Hooks/LocalStorage/useResults";
import { BigButton } from "../../Utils/BigButton/BigButton";
const CloseIcon = require('../../../assets/close.png');

export const Test = ({ element, closeTest }) => {

    const [ loading, error, test ] = useGet(`/current-test?id=${element._id}`);
    const [ quest, setQuest ] = useState(Array(20).fill(null));
    const [ result, setResult ] = useState(false);
    const { addResults } = useResults();

    if(loading) return <Loader />
    else if(error) return <Error text={'К сожалению, не получилось загрузить тест, попробуйте позже :('} />

    const changeQuest = (index, value) => {
        const newQuest = [...quest];
        newQuest[index] = value;
        setQuest(newQuest);
    }
    
    const finishTest = () => {
        const answer = [];
        let trueAnswer = 0;
        let allQuest = 0;

        for(let index = 0; index < test.length; index++) {
            allQuest += 1;
            if(quest[index] === test[index].true) trueAnswer += 1;
            const newAnswer = {
                quest: test[index].text,
                trueAnswer: test[index].variable[test[index].true],
                yourAnswer: quest[index] !== null ? test[index].variable[quest[index]] : "Вы не ответили на данный вопрос.",
                result: quest[index] === test[index].true
            };
            answer.push(newAnswer);
        }

        const newResult = {
            id: new Date().getTime(),
            name: element.name,
            img_path: element.img_path,
            date: new Date().toLocaleDateString(),
            true_answer: trueAnswer,
            answer: answer,
            all_quest: allQuest
        }

        addResults(newResult);
        setResult(newResult);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                <TouchableHighlight
                    style={styles.button}
                    activeOpacity={1}
                    underlayColor={'#333333'}
                    onPress={closeTest}
                >
                    <Image 
                        style={styles.buttonImage}
                        source={CloseIcon} 
                    />
                </TouchableHighlight>
                </View>
                { 
                    !result ? 
                        <Multiform closeTest={finishTest}>
                            {
                                test.map((element, index) => 
                                    <QuestElement 
                                        key={element._id}
                                        element={element}
                                        quest={quest[index]}
                                        changeQuest={changeQuest}
                                        number={index}
                                    />    
                                )
                            } 
                        </Multiform>
                    :
                        <View style={styles.resultsContainter}>
                            <Text style={styles.resultsTitle}>Ваш результат:</Text>
                            <Text style={styles.resultsText}>{result.true_answer}/{result.all_quest}</Text>
                            <BigButton 
                                text={'Подробнее'} 
                            />
                            <BigButton 
                                text={'Закрыть'}
                                handler={closeTest}
                            />
                        </View>
                }

            </ScrollView>
        </SafeAreaView>
    )
}