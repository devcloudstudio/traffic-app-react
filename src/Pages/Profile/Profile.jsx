import React, { Fragment, useState } from "react"
import FileBase from 'react-file-base64';
import { updateProfile } from '../../Redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Profile = () => {

  const dispatch = useDispatch()
  const [profile, setProfile] = useState({ name: '', username: '', avatar: '' })
  const { name, username } = profile
  const handleChange = e => setProfile({ ...profile, [e.target.name]: e.target.value })
  const history = useHistory()

  const handleSubmit = e => {
    e.preventDefault()

    dispatch(updateProfile(profile)).then(() => {
      history.push('/dashboard')
      /*setTimeout(function () {
        window.location.reload()
      }, 300)*/
    })

  }

  const user = useSelector(state => state.profile || {})
  const email = useSelector(state => state.user || {}).email;

  return (
    <Fragment>
      <section className="right">
        <div className="container">
          <div className="navbar my-2">
            <ul className="d-flex list-item-group nav nav-left border">
              <li className="list-item">
                <div className="form--container mx-1">
                  <input className="nav-form" type="text" placeholder="search by keywords" /><i className="fas fa-search"></i>
                </div>
              </li>
            </ul>
          </div>
          <div className="main--wrapper">
            <div className="auth--container d-flex">
              <div className="modal-wrapper d-flex">
                <div className="heading text--center mx-4">
                  <h1 className="mx-2 text--primary text--bolder">Profile</h1><span className="text--secondary">Edit Your Profile</span>
                </div>
                <form onSubmit={handleSubmit}>
                  <section className="avatar--container">
                    <div className="dropzone">
                      <input className="custome--file--input" type="file" />
                    </div>
                    <div className="img--container"><img alt="profile" src={profile.avatar ? profile.avatar : 'https://i.ibb.co/9ycTC57/image-2021-07-07-165600.png'} /><i className="fas fa-edit"></i></div>
                  </section>
                  <div className="form--group">
                    <input className="border-bottom form--control" placeholder={email} type="text" value={email} readOnly />
                  </div>
                  <div className="form--group">
                    <input className="border-bottom form--control" placeholder={user.name && user.name} type="text" value={name} onChange={handleChange} name="name" />
                  </div>
                  <div className="form--group">
                    <input className="border-bottom form--control" value={username} onChange={handleChange} type="text" placeholder="Username" name="username" />
                  </div>
                  {/* <div className="form--group">
                <input className="border-bottom form--control" type="text" placeholder="Email" />
              </div> */}
                  {/* <div className="form--group">
                <input className="border-bottom form--control" type="text" placeholder="New Password"/>
              </div> */}
                  {/* <div className="form--group">
                <input className="border-bottom form--control" type="text" placeholder="Old Password"/>
              </div> */}
                  <div className='form-group'>
                    <label>Upload profile picture</label>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setProfile({ ...profile, avatar: base64 })} />
                  </div>
                  <div className="btn--group">
                    <button className="btn btn-outline-primary btn-primary btn--round text--primary" type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Profile