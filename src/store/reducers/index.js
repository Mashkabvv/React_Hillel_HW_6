import {combineReducers} from "redux";
import groups from './reducerGroups';
import students from './reducerStudents';


export default combineReducers({
    groups: groups,
    students: students
});
