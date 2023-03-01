import { Input } from './Filter.styled';
import { addFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getIsloading } from 'redux/selectors';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations';
import Loader from 'components/Loader/Loader';

export function Filter() {
  const isLoading = useSelector(getIsloading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      <Input
        type="text"
        name="filter"
        onChange={event => dispatch(addFilter(event.target.value))}
      />
    </>
  );
}
