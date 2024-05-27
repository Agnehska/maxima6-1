import React, { useState } from 'react';
import './UserCard.scss';
import { useDispatch } from 'react-redux';
import { changeUsers, removeUsers } from '../../../redux/slices/usersSlice';
import UserIsChange from './UserIsChange/UserIsChange';
import { Link } from 'react-router-dom';

const UserCard = ({ status, id, name, email, phone, login, type }) => {
  const [isChanging, setIsChanging] = useState(false);
  const [userData, setUserData] = useState({ id, name, email, phone, login, type })
  const dispatch = useDispatch();

  function changeItem() {
    dispatch(changeUsers(userData))
    setIsChanging(false)
  }

  function createChanges() {
    setIsChanging(true)
  }

  return (
    <div className="users__card">
      <p className={`${status === 'title' ? 'users__table-name' : 'users__name'} card__elem`}>{id}</p>

      <UserIsChange isChanging={isChanging} name='name' userData={userData} status={status} setUserData={setUserData} />
      <UserIsChange isChanging={isChanging} name='email' userData={userData} status={status} setUserData={setUserData} />
      <UserIsChange isChanging={isChanging} name='phone' userData={userData} status={status} setUserData={setUserData} />
      <UserIsChange isChanging={isChanging} name='login' userData={userData} status={status} setUserData={setUserData} />
      <UserIsChange isChanging={isChanging} name='type' userData={userData} status={status} setUserData={setUserData} />
    
      {status === 'title' ?
        <>
          <p className="users__table-name card__elem">You can</p>
          <p className="users__table-name card__elem">You can</p>
          <p className="users__table-name card__elem">You can read</p>
        </> :
        <>
          <div className="users__block card__elem">
            {isChanging ?
              <button className="users__btn" onClick={changeItem}>Save</button>
              :
              <button className="users__btn" onClick={createChanges}>Change</button>
            }
          </div>
          <div className="users__block card__elem">
            <button className="users__btn" onClick={() => dispatch(removeUsers(id))}>Delete</button>
          </div>
          <div className="users__block card__elem">
            <Link to={`/users/${id}`} className="users__btn" >More</Link >
          </div>
        </>}

    </div>
  );
}

export default UserCard;
