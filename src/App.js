//import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import { ContactList } from "./components/Contact";
//import { saveContacts, loadContacts } from "./components/utils/storage";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
