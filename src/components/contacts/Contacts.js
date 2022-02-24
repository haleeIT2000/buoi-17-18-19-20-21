
import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer} from './../../Context'
 class Contacts extends Component {
    constructor(){
        super();
        this.state = {      
    }
  }
    deleteContact = (id) => {
      console.log("hi",this.state);
      const {contacts} = this.state;
      let newContacts = contacts.filter( el => el.id !==  id );
      this.setState({
        contacts: newContacts
      })
    }
  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (<Consumer>
      {
        value => {
          const {contacts} = value;
          return (
            <React.Fragment>
                {
                    contacts.map(contact => 
                        <Contact 
                        key = {contact.id}
                      //   name = {contact.name}
                      //   phone = {contact.phone}
                      //   email = {contact.email}
                      contact = {contact}
                      deleteClickHandle = {this.deleteContact}
                        />
                    )
                }
            </React.Fragment>
            
          )
        }
      }
    </Consumer>
   )
    
  }
}
export default Contacts;
