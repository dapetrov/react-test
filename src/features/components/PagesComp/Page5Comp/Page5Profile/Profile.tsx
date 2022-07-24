import React, { KeyboardEventHandler, useEffect, useRef } from 'react';
import './Profile.css';
type User = {
  name: string;
  age: number;
  number: string;
  address: string;
};

const UserName: React.FC<{ oldname: string }> = ({ oldname }) => {
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [name, SetName] = React.useState<string>('');
  const InputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    SetName(oldname);
  }, [oldname]);
  const handleClick = () => {
    setClicked((prev) => !prev);
  };
  const saveName = () => {
    if (!InputRef.current) {
      return;
    }
    const newName = InputRef.current.value;
    SetName(newName);
    handleClick();
  };

  const onPressEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      saveName();
    }
    if (event.key === 'Escape') {
      handleClick();
    }
  };

  if (clicked) {
    return (
      <>
        <input
          type='text'
          defaultValue={name}
          onKeyDown={onPressEnter}
          ref={InputRef}
          className='NameChangeInput'
        />
        <button onClick={saveName}>Сохранить</button>
      </>
    );
  }
  return <p onClick={handleClick}>{name}</p>;
};

const UserAge: React.FC<{ age: number }> = ({ age }) => {
  return (
    <div className='ProfileContainer'>
      <p className='ProfileText'>
        <b>Age:</b> {age}
      </p>
    </div>
  );
};

const UserMNumber: React.FC<{ number: string }> = ({ number }) => {
  return (
    <div className='ProfileContainer'>
      <p className='ProfileText'>
        <b>Number:</b> {number}
      </p>
    </div>
  );
};
const UserAdress: React.FC<{ address: string }> = ({ address }) => {
  return (
    <div className='ProfileContainer'>
      <p className='ProfileText'>
        <b>Address:</b> {address}
      </p>
    </div>
  );
};

export const Profile: React.FC = () => {
  const [user, setUser] = React.useState<User>({
    name: '',
    age: 0,
    number: '',
    address: '',
  });
  React.useEffect(() => {
    setUser({
      name: 'Fedor',
      age: 18,
      number: '8-800-555-35-35',
      address: 'г Казань, ул Братьев Касимовых, д 64',
    });
  }, []);

  return (
    <div className='Profile'>
      <div className='ProfileImage'>
        <img className='ProfileImageImg' src='cat.jpg' alt='avatar'></img>
      </div>
      <div className='ProfileContainer'>
        <p className='ProfileText'>
          <b>Username:</b>
        </p>
        <UserName oldname={user.name} />
      </div>
      <UserAge age={user.age} />
      <UserMNumber number={user.number} />
      <UserAdress address={user.address} />
    </div>
  );
};
