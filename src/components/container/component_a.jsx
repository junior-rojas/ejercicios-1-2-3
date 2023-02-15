import React from 'react';
import { Contact } from '../../models/contact.class';
import ComponentB from '../pure/component_b';

export const ComponentA = () => {

    const defaultContact = new Contact("Junior", "Rojas", "junior@email.com", false);
    
    return (
        <div>
            <ComponentB contact={defaultContact}></ComponentB>
        </div>
    );
};

export default ComponentA;