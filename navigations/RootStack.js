import Location from "../screens/week10/Location";
import LocationQuiz from "../screens/week10/LocationQuiz";

const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="BottomTab">
            ...
            <Stack.Screen name="BookForm" component={BookForm} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="LocationQuiz" component={LocationQuiz} />
        </Stack.Navigator>
    );
}


