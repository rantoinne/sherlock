const initialState = {
  emails: [],
  page: []
};

export default (state = initialState, action= {}) => {
  switch(action.type) {
    case 'SET':
      return {
        ...state,
        page: state.page.concat(action.payload)
      }

    case 'EMAIL':
      return {
        ...state,
        emails: state.emails.concat(action.payload)
      }
    default:
      return state;
  }
};