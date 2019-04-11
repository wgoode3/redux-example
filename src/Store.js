const initialState = {
  count: 0,
  tasks: [
    "Learn React", 
    "Learn Redux"
  ]
};

export default function reducer(state=initialState, action) { 
  switch(action.type) {
    case "ADD":
      return Object.assign({}, state, {count: state.count+1});
    case "SUBTRACT":
      return Object.assign({}, state, {count: state.count-1});
    case "ADD_TASK":
      return Object.assign({}, state, {tasks: [...state.tasks, action.task]});
    default:
      return state;
  }
}