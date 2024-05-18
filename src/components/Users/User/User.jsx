import React from 'react';
import './User.scss';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';


export default function User() {
  const param = useParams();
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const user = users.filter(user => user.id === param.id)[0];

  return (
    <section className="user">
      <div className="container">
        <h2 className="user__title">Name: {user.name}</h2>
        <p className="user__text">Login: {user.login}</p>
        <p className="user__text">Email: {user.email}</p>
        <p className="user__text">Phone: {user.phone}</p>
        <p className="user__text">Type: {user.type}</p>
        <button className="user__btn" onClick={() => navigate('/users')}>Назад</button>
      </div>
    </section>
  )
}
