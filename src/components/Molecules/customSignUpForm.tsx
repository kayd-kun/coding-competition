import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSignUp } from '@clerk/nextjs';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [teamName, setTeamName] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      // Create a new user with the provided email and team name
      const newUser = await useSignUp(email);
      await newUser.updateMetadata({ teamName });

      // Redirect to a success page
    //   router.push('/success');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Team Name"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default SignupForm;
