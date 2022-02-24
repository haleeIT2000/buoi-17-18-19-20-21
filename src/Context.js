import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
        switch (action.type) {
            case "DELETE_CONTACTS":
                return {
                    ...state,
                    contacts: state.contacts.filter( el => el.id !== action.payload)
                }
                case "ADD_CONTACTS":
                    return {
                        ...state,
                    contacts: [action.payload, ...state.contacts]
                    }
                    case "UPDATE_CONTACT":
                        return {
                            ...state,
                        
                        }
            default:
                return state;
        }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Jenny',
                phone: '5281008765',
                email: 'ahyr@gmail.com'
            },
            {
                id: 2,
                name: 'tiktok',
                phone: '1000008765',
                email: 'tiktok@gmail.com'
            },
            {
                id: 3,
                name: 'Susan',
                phone: '5281008765',
                email: 'susan@gmail.com'
            }

        ],
        isloading: false,
        dispatch: ( action) => {
            this.setState(state => reducer(state, action))
        }
    }
  render() {
    return (
      <Context.Provider value={this.state}>
          {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer;
