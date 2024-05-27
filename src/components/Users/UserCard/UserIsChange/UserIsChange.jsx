import React from 'react';

const UserIsChange = ({ isChanging, userData, status, setUserData, name}) => {
  let elem = '';

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  if (isChanging){
    elem = <div className="card__elem">
      <input
        type="text"
        className='users__input'
        value={userData[name]}
        name={name}
        onChange={event => handleChange(event)}
      />
    </div>
  } else {
    elem = <p className={`${status === 'title' ? 'users__table-name' : 'users__name'} card__elem`}>{userData[name]}</p>
  }
    
  return (
    <>
      {elem}
    </>
  );
}

export default UserIsChange;
