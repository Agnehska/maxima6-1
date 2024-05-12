import React, { useState } from 'react';
import './UserCard.scss';
import { deleteUsers, changeUser } from '../../../redux/slices/usersSlice';
import { useDispatch } from 'react-redux';

const UserCard = ({status, id, name, email, phone, login, type}) => {
  const [isChanging, setIsChanging] = useState(false);
  const [userData, setUserData] = useState({ id, name, email, phone, login, type })
  const dispatch = useDispatch();

  function changeItem(){
    dispatch(changeUser(userData));
    setIsChanging(false)
  }

  function createChanges(){
    setIsChanging(true)
    console.log(true)
  }

  return (
    <div className="users__card">
      <p className={`${status === 'title' ? 'users__table-name' : 'users__name'} card__elem`}>{id}</p>
      {isChanging ? 
        <div className="card__elem">
          <input type="text" className='users__input' value={userData.name} onChange={event => setUserData({...userData, name: event.target.value})}/> 
        </div>  
      :
        <h4 className={`${status === 'title' ? 'users__table-name' : 'users__name'} card__elem`}>{name}</h4>
      } 
      {isChanging ? 
        <div className="card__elem">
          <input type="text" className='users__input' value={userData.email} onChange={event => setUserData({...userData, email:event.target.value})}/> 
        </div>  
      :
        <p className={`${status === 'title' ? 'users__table-name' : 'users__name'} card__elem`}>{email}</p>
      } 
      {isChanging ? 
        <div className="card__elem">
          <input type="text" className='users__input' value={userData.phone} onChange={event => setUserData({...userData, phone: event.target.value})}/> 
        </div>  
      :
        <p className={`${status === 'title' ? 'users__table-name' : 'users__name'} card__elem`}>{phone}</p>
      }
      {isChanging ? 
        <div className="card__elem">
          <input type="text" className='users__input' value={userData.login} onChange={event => setUserData({...userData, login: event.target.value})}/> 
        </div>  
      :
        <p className={`${status === 'title' ? 'users__table-name' : 'users__name'} card__elem`}>{login}</p>
      }
      {isChanging ? 
        <div className="card__elem">
          <input type="text" className='users__input' value={userData.type} onChange={event => setUserData({...userData, type: event.target.value})}/> 
        </div>  
      :
        <p className={`${status === 'title' ? 'users__table-name' : 'users__name'} card__elem`}>{type}</p>
      }
      { status === 'title' ? 
      <>
        <p className="users__table-name card__elem">You can</p>
        <p className="users__table-name card__elem">You can</p>
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
          <button className="users__btn" onClick={() => dispatch(deleteUsers(id))}>Delete</button>
        </div>
      </>}
      
    </div>
  );
}

export default UserCard;
