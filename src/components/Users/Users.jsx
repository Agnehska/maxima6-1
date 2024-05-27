import React, { useState, useEffect} from 'react';
import './Users.scss';
import UserCard from './UserCard/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../blocks/Button/Button';
import UserModal from './UserModal/UserModal';
import { getUsers } from '../../redux/slices/usersSlice';


const Users = () => {
  const dispatch = useDispatch();
  const [ showModal, setShowModal ] = useState(false);
  const users = useSelector((state) => state.users.users);
  const { status, error } = useSelector((state) => state.users);
  console.log(error);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const printUsers = users?.map(user => {
    return <UserCard 
      key={user.id}
      status='' 
      id={user.id} 
      name={user.name}
      email={user.email} 
      phone={user.phone} 
      login={user.login}
      type={user.type}
    />
  })
  return (
    <section className="users">
      {showModal && <UserModal showModal={showModal} setShowModal={setShowModal} />}
      <div className="users__container">
        <h2 className="users__title">Таблица пользователей</h2>
        { error ? 
          <p>{error}</p>:
          <>
            <Button class_btn='users-create__btn' functionBtn={() => setShowModal(true)}>Добавить пользователя</Button>
            <div className="users__row">
              <UserCard 
                status='title' 
                id='ID' 
                name='Name' 
                email='Email' 
                phone='Phone' 
                login='Login'
                type='Type'
              />
              {status === 'loading' && <h1>Loading...</h1>}
              {printUsers}
            </div>
          </>
          
        }
      </div>
    </section>
  );
}

export default Users;
