import React, { useReducer } from 'react';
 
const initialState = {
  firstName: {
      value: '',
      error: null
  },
  lastName: {
      value: '',
      error: null
  },
  email: {
      value: '',
      error: null
  }
};
 
function reducer(state, action) {
    
    switch (action.type) {
      case "ACTUALIZAR_INPUT":
        return {
          ...state,
          [action.payload.name]: {
            value: action.payload.value,
            error: null
          }
        };
      case "ERROR_INPUT":
        return {
          ...state,
          [action.payload.name]: {
            value: action.payload.value,
            error: action.payload.error
          }
        };    
      default:
        return state
    }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: "ACTUALIZAR_INPUT",
            payload: {
              name,
              value
            }
        });
    }

    function handleSubmit(e) {
      e.preventDefault();
      if(state.firstName.value === ""){
        const errorFirstName = "El nombre es obligatorio";
        onError("firstName", state.firstName.value, errorFirstName);
      }
      if(state.lastName.value === ""){
        const errorLastName = "El Apellido es obligatorio";
        onError("lastName", state.lastName.value, errorLastName);
      }
      if(!validateEmail(state.email.value)){
        const errorEmail = "El Email no es valido";
        onError("email", state.email.value, errorEmail);
      }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function onError(name, value, error){
      dispatch({
          type: "ERROR_INPUT",
          payload: {
            name,
            value,
            error
          }
      });
  }
 
    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>firstName:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                    />
                </label>
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div>
                <label>
                    <span>lastName:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                    />
                </label>
                {state.lastName.error !== null && (
                    <p className="error">{state.lastName.error}</p>
                )}
            </div>
            <div>
                <label>
                    <span>email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                </label>
                {state.email.error !== null && (
                    <p className="error">{state.email.error}</p>
                )}
            </div>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default App;
