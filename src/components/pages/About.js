
import React, { useState, useEffect } from 'react'
import { Consumer } from './../../Context'
import { useParams } from 'react-router-dom'
import TextInputGroup from '../layout/TextInputGroup';
import { switchCase } from '@babel/types';
export default function About() {
    let params = useParams();
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);

    // default value page 
    const [dataDefault, setDataDefault] = useState();
    // componentDidUpate(preProps, preState)
    useEffect(() => {
        if(dataDefault){
            setName(dataDefault.name);
            setEmail(dataDefault.email)
            setPhone(dataDefault.phone)
        }
    }, [dataDefault])
    // onchange
    const onChange = (key, e) => {
        switch (key) {
            case "name":
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
        }
    }
    return (
        <Consumer>
            { value => {
                const itemSelect = value.contacts.filter(el => el.id === params.id);
                console.log('itemSelect', itemSelect);

                return (
                    <React.Fragment>
                        <h2 className="display-4">About Contact {params.id}</h2>
                        table
                        <p className="text-secondary">Version 1.0</p>
                        <div className='card mb-3'>
                            <div className='card-header'>
                                Add Contact
                            </div>
                            <div className='card-body'>
                                <form
                                // onSubmit={this.hanldeData.bind(this, dispatch)}
                                >
                                    <div className="form-group ">
                                        <label htmlFor='name'>
                                            Name
                                        </label>
                                        <TextInputGroup
                                            type='text'
                                            name='name'
                                            placeholder='name...'
                                            value={name}
                                            onChange={((e) => onChange('name', e))}
                                            className='form-control form-control-lg'
                                            error={errors.name} />
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
                                            onChange={(e) => onChange('phone', e)}
                                            className='form-control form-control-lg'
                                            error={errors.phone} />
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
                                            onChange={(e) => onChange('email', e)}
                                            className='form-control form-control-lg'
                                            error={errors.email} />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }}
        </Consumer>
    )
}
