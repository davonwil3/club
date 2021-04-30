import {createStore, combineReducers} from 'redux';


const reserve = (content)=>{

  return{
    type: 'reserve',


    payload: {
      name: content.name,
      phone: content.phone,
      email: content.email,
      number:content.number,
      state:content.state,
      date: content.date,
      message: content.message,
      address: content.address,
      city :  content.city


    }



  }


}



function reserveState(state={}, action){


  switch (action.type){




    case 'reserve':


  var name = action.payload.name
  var phone = action.payload.phone
  var email = action.payload.email
  var number = action.payload.number
  var theState = action.payload.state
  var date = action.payload.date
  var message = action.payload.message
  var address = action.payload.address
  var city = action.payload.city


  if (typeof action.payload.name === "undefined"){

    name = state.name;

  }
  if (typeof action.payload.phone === "undefined"){

    phone = state.phone

  }
  if (typeof action.payload.email === "undefined"){

    email = state.email

  }
  if (typeof action.payload.number === "undefined"){

    number = state.number

  }
  if (typeof action.payload.state === "undefined"){

    theState = state.state

  }
  if (typeof action.payload.date === "undefined"){

    date = state.date

  }
  if (typeof action.payload.message === "undefined"){

    message = state.message

  }
  if (typeof action.payload.address === "undefined"){

    address = state.address

  }
  if (typeof action.payload.city  === "undefined"){

    city = state.city

  }


      state = {

        name: name,
        phone: phone,
        email: email,
        number:number,
        state:theState,
        date: date,
        message: message,
        address: address,
        city :  city


      }
      return state

default :
    return state
  };

}




let store = createStore(reserveState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())





export default store;

export {reserve};
