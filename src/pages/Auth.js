import SignUpForm from "../components/SignUpForm"
import LogInForm from "../components/LogInForm"
// import Logout from "../components/Logout"

export default function Auth (props) {
  return (
    <main>
       <h2>Sign Up</h2>
      <SignUpForm setUser={props.setUser} />
      <h2>Log In</h2>
      <LogInForm setUser={props.setUser} />
      {/* <h2>Log Out</h2>
      <Logout setUser={props.setUser} /> */}
    </main>
  )
}