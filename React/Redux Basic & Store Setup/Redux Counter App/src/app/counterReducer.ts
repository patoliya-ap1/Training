export type InitialState = {
  count: number;
};

export type Action = {
  type: string;
};

const initialState: InitialState = { count: 0 };

export const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "increase": {
      return { ...state, count: state.count + 1 };
    }

    case "decrease": {
      return { ...state, count: state.count===0 ? state.count : state.count - 1 };
    }

    default: {
      return state;
    }
  }
};
