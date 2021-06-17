import React from 'react';

class AddContact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
  }

  add(e) {
    e.preventDefault();
    if (this.state.name === '' || this.state.email === '') {
      alert('All fields are mandatory');
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: '', email: '' });
    this.props.history.push('/');
    console.log(this.state);
  }

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={(e) => this.add(e)}>
          <div className="field">
            <div>Name</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <div>Email</div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button type="submit" className="ui button blue">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
