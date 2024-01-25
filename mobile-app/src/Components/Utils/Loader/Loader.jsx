import { ActivityIndicator, View } from "react-native"

export const Loader = () => {

    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <ActivityIndicator 
                size={"large"}
                color={"#FFFFFF"}
            />
        </View>
    )

}