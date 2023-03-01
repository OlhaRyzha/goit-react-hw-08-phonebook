import { ContactForm } from './ContactForm/ContactForm';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export function App() {
  return (
    <>
    Routes>
            <Route path="/" element={<ContactsPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            
            <Route
              path="*"
              element={
                <Navigate to="/" />
              }
            />
          </Routes>
      // <Title message="Phonebook" />
      // <ContactForm />
      // <Title message="Contacts" />
      // <Filter />
      // <ContactList />
    </>
  );
}
