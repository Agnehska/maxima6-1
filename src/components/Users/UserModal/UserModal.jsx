import React, { useState } from 'react';
import './UserModal.scss';
import { uuid } from '../../../api/helpers';
import { useDispatch } from 'react-redux';
import { addUsers } from '../../../redux/slices/usersSlice';

const UserModal = ({ showModal, setShowModal}) => {
  const dispatch = useDispatch();
  const [formInfo, setFormInfo] = useState(
    { 
      id: uuid(8), 
      name: '', 
      email: '', 
      phone: '', 
      login: '', 
      type: '', 
    });
  

  async function handlerSaveReview(event){
    event.preventDefault();

    setShowModal(false);

    dispatch(addUsers(formInfo))
  }

  return (
    <div className={showModal ? 'modal' : 'modal hide'}>
      <div className="modal__close" onClick={() => setShowModal(false)}>X</div>
      <form className="modal__form">
          <input type="text" className="modal__input" required placeholder='Name'  value={formInfo.name} onChange={event => setFormInfo({...formInfo, name: event.target.value})}/>
          <input type="text" className="modal__input" required placeholder='Email' value={formInfo.email} onChange={event => setFormInfo({...formInfo, email: event.target.value})}/>
          <input type="text" className="modal__input" required placeholder='Phone' value={formInfo.phone} onChange={event => setFormInfo({...formInfo, phone: event.target.value})}/>
          <input type="text" className="modal__input" required placeholder='Login' value={formInfo.login} onChange={event => setFormInfo({...formInfo, login: event.target.value})}/>
          <input type="text" className="modal__input" required placeholder='Type' value={formInfo.type} onChange={event => setFormInfo({...formInfo, type: event.target.value})}/>
          <button className="modal__btn" onClick={handlerSaveReview}>Save</button>
      </form>
    </div>
  );
}

export default UserModal;
