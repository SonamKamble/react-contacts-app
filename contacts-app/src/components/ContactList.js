import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const inputE1 = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => (
    <ContactCard
      contact={contact}
      clickHandler={deleteContactHandler}
      key={contact.id}
    ></ContactCard>
  ));

  const getsearchTerm = () => {
    props.searchKeyword(inputE1.current.value);
  }
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input 
            ref = {inputE1} 
            type="text" 
            placeholder="Search Contacts" 
            className="prompt" 
            value={props.terms} 
            onChange={getsearchTerm}
          />
          <i className="search icon"/>
        </div>
      </div>
      <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No Contacts available"}</div>
    </div>
  );
};

export default ContactList;
