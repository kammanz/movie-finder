import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SignUp from '../components/SignUp';
import { AuthProvider } from '../contexts/authContext';

const Home = () => {
  return (
    <AuthProvider>
      <SignUp />
    </AuthProvider>
  );
};

export default Home;
