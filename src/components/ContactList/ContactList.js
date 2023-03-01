import { Card, Button } from './ContactList.styled';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Card>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name}: {number}
            <Button
              onClick={e => {
                e.preventDefault();
                handleDelete(id);
              }}
            >
              Delete
            </Button>
          </li>
        ))}
      </Card>
    </>
  );
}
