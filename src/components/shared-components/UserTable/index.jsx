import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'
import { APP_PREFIX_PATH } from "configs/AppConfig";


function UserTable({id, name,email,phone,website}) {
  return (
    <>
    <div className={style.table}>
      <Link to={`user${id},${name},${phone},${email},${website}`}>  <div>{name}</div></Link>
        <div>{email}</div>
        <div>{phone}</div>
        <div>{website}</div>
    </div>
    </>
  )
}

export default UserTable