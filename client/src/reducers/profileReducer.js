import isEmpty from "../validation/is-empty";
import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
