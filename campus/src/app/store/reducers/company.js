// import { CompanyAction } from "./../actions/index.js";
import { CompanyAction } from "./../actions/company.js"
const InitailState = {
    companies: [],
    posts: [],
    temp: {},
    isLoading: false,
    companyPost:[]
}

export const companyReducer = (state = InitailState, action) => {
    let newState;
    switch (action.type) {
        case 'ADD_POST':
            newState = state.posts;
            newState.push({ value: action.payload });
            // newState = newState.reverse();
            return Object.assign({}, state, { posts: newState.reverse() });
        case 'ADD_COMPANY':
            newState = state.companies;
            newState.push({ value: action.payload });
            return Object.assign({}, state, { companies: newState });
        case 'GET_COMPANY':
            return Object.assign({}, state, { isLoading: true });
        case 'GET_COMPANY_SUCCESS':
            newState = state;
            newState.companies = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, newState)
        case 'GET_COMPANY_FAIL':
            return Object.assign({}, state, { isLoading: false })
        case 'GET_POST_BY_COMPANY':
            return Object.assign({}, state, { isLoading: true });
        case 'GET_POST_BY_COMPANY_SUCCESS':
            newState = state;
            newState.posts = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, newState);
        case 'GET_POST_BY_COMPANY_FAIL':
            return Object.assign({}, state, { isLoading: false });

        case 'GET_POST':
            return Object.assign({}, state, { isLoading: true });
        case 'GET_POST_SUCCESS':
            newState = state;
            newState.posts = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, newState);
        case 'GET_POST_FAIL':
            return Object.assign({}, state, { isLoading: false });



        case 'GET_ONE_POST_BY_COMPANY':
            return Object.assign({}, state, { isLoading: true });
        case 'GET_ONE_POST_BY_COMPANY_SUCCESS':
            newState = state;
            newState.temp = action.payload;
            newState.isLoading = false;
            return Object.assign({}, state, newState);
        case 'GET_ONE_POST_BY_COMPANY_FAIL':
            return Object.assign({}, state, { isLoading: false });


        default:
            return state;
    }
}