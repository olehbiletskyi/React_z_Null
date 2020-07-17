import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
//спеціальна функція комбінує всі редюсери в один.
let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sidebarPage : sidebarReducer,
});

//спеціальна функція createStore, яка створює store з того reducers, який ми зкомбайнили вище.
let store = createStore(reducers);

export default store; //експортуємо store