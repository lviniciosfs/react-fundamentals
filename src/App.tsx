import Profile from './Profile.js'

export default function Gallery() {
  return (
    <>
    <h1>A list of profiles:</h1>
      <Profile
        name={'Lucas'}
        age={30}
        profission={'Developer'}
      ></Profile>
    </>
  )
}