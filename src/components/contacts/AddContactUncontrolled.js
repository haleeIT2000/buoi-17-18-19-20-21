import React, { Component } from 'react'

export class AddContactUncontrolled extends Component {
    // sử dụng ref defaultValue k sd onchange như controlled 
    constructor(props) {
        super(props);
        this.inputName = React.createRef();
        this.inputEmail = React.createRef();
        this.inputPhone = React.createRef();
    }

    hanldeData = (e) => {
        e.preventDefault();
        const newContact = {
            name: this.inputName.current.value,
            email: this.inputEmail.current.value,
            phone: this.inputPhone.current.value,
        }
        console.log('newContact',newContact);
    }
    static defaultProps = {
        name: 'tienvv',
        email: 'tienvv@gmail.com.vn',
        phone: '+098765'
    }
    render() {
        const { name, phone, email } = this.props;
        return (
            <div className='card mb-3'>
                <div className='card-header'>
                    Add Contact
                </div>
                <div className='card-body'>
                    <form onSubmit={this.hanldeData}>
                        <div className="form-group ">
                            <label htmlFor='name'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                placeholder='name...'
                                defaultValue={name}
                                ref={this.inputName}
                                className= 'form-control form-control-lg' />
                        </div>
                        <div className="form-group">
                            <label htmlFor='phone'>
                                Phone
                            </label>
                            <input
                                type='text'
                                name='phone'
                                placeholder='phone...'
                                defaultValue={phone}
                                ref={this.inputPhone} 
                                className= 'form-control form-control-lg'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor='email'>
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                placeholder='email...'
                                defaultValue={email}
                                ref={this.inputEmail} 
                                className= 'form-control form-control-lg'/>
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
    }
}
export default AddContactUncontrolled;