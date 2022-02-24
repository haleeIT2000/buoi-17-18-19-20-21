import React, { Component } from 'react'
import { Consumer } from './../../Context'
import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

export class AddContact extends Component {
    //controlled comp
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }
    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });
    //push data
    hanldeData = (dispatch, e) => {
        e.preventDefault();
      
        const {
            name,
            phone,
            email
        } = this.state;
        if(name === ''){
            this.setState({errors: {name: 'Name is required'}})
            return
        }
       
        if(phone === ''){
            this.setState({errors: {phone: 'phone is required'}})
            return
        }
        if(email === ''){
            this.setState({errors: {email: 'email is required'}})
            return
        }
        const newContac = {
            id: uuidv4(),
            name,
            phone,
            email
        }
        console.log('new', newContac);
        dispatch({ type: 'ADD_CONTACTS', payload: newContac })
        this.setState(
          {
            name: '',
            email: '',
            phone: '',
            errors : {}
          }
        )
    }

    render() {
        const { name, phone, email, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card mb-3'>
                            <div className='card-header'>
                                Add Contact
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.hanldeData.bind(this, dispatch)}>
                                    <div className="form-group ">
                                        <label htmlFor='name'>
                                            Name
                                        </label>
                                        <TextInputGroup
                                            type='text'
                                            name='name'
                                            placeholder='name...'
                                            value={name}
                                            onChange={this.onChange}
                                            className='form-control form-control-lg' 
                                            error = {errors.name}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='phone'>
                                            Phone
                                        </label>
                                        <TextInputGroup
                                            type='text'
                                            name='phone'
                                            placeholder='phone...'
                                            value={phone}
                                            onChange={this.onChange}
                                            className='form-control form-control-lg' 
                                            error = {errors.phone}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='email'>
                                            Email
                                        </label>
                                        <TextInputGroup
                                            type='email'
                                            name='email'
                                            placeholder='email...'
                                            value={email}
                                            onChange={this.onChange}
                                            className='form-control form-control-lg' 
                                            error = {errors.email}/>
                                    </div>
                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}

            </Consumer>

        )
    }
}
export default AddContact;
