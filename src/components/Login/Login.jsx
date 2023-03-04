import { Form, Input, Button } from 'components/ContactForm/ContactForm.styled';

import { useDispatch } from 'react-redux';
import { login } from 'redux/user/operations';

const Login = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(login(user));
    event.target.reset();
  };
  return (
    <Form onSubmit={handelSubmit}>
      <Input type="email" name="email" />
      <Input type="password" name="password" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
export default Login;
