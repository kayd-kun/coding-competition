import { SignUp } from "@clerk/nextjs"
// import SignupForm from "~/components/Molecules/customSignUpForm"

export default function SignUpComponent() {

    return (
        <>
        <div className="flex items-center justify-center h-screen">
            <SignUp path="/sign-up"/>
        </div>
        {/* <div>
            <p>Testing</p>
            <SignupForm />
            
        </div> */}
        </>
    )
}