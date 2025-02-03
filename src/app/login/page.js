/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './login.module.css';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (!value) {
            setError('');
            setIsValid(false);
        } else if (!validateEmail(value)) {
            setError('Please enter a valid email address.');
            setIsValid(false);
        } else {
            setError('');
            setIsValid(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            // Handle login logic here
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image
                    src="/images/logo.svg"
                    alt="SurveyMonkey Logo"
                    width={250}
                    height={38}
                    priority
                />
            </div>

            <div className={styles.loginBox}>
                <div className={styles.signupLink}>
                    <span>Don't have an account? </span>
                    <Link href="/signup">Sign up</Link>
                </div>

                <h1 className={styles.title}>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className={error ? styles.inputError : ''}
                            required
                        />
                        {error && (
                            <div className={styles.errorMessage}>
                                <span className={styles.errorIcon}>!</span>
                                {error}
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className={`${styles.nextButton} ${!isValid ? styles.buttonDisabled : ''}`}
                        disabled={!isValid}
                    >
                        Next
                    </button>
                </form>

                <div className={styles.ssoSection}>
                    <p>Or sign in via</p>
                    <button
                        className={styles.ssoButton}
                        onClick={() => router.push('/login/sso')}
                    >
                        <Image
                            src="/images/key.svg"
                            alt="Key Icon"
                            width={24}
                            height={24}
                        />
                        <span>Single sign-on</span>
                    </button>
                    <div className={styles.ssoGrid}>
                        <button className={styles.ssoGridItem}>
                            <div className={styles.ssoIconWrapper}>
                                <Image src="/images/microsoft_logo.svg" alt="Microsoft" width={24} height={24} />
                            </div>
                            <span>Microsoft</span>
                        </button>
                        <button className={styles.ssoGridItem}>
                            <div className={styles.ssoIconWrapper}>
                                <Image src="/images/facebook_logo.svg" alt="Facebook" width={26} height={26} />
                            </div>
                            <span>Facebook</span>
                        </button>
                        <button className={styles.ssoGridItem}>
                            <div className={styles.ssoIconWrapper}>
                                <Image src="/images/linkedin_logo.svg" alt="LinkedIn" width={24} height={24} />
                            </div>
                            <span>LinkedIn</span>
                        </button>
                        <button className={styles.ssoGridItem}>
                            <div className={styles.ssoIconWrapper}>
                                <Image src="/images/google_logo.svg" alt="Google" width={26} height={24} />
                            </div>
                            <span>Google</span>
                        </button>
                        <button className={styles.ssoGridItem}>
                            <div className={styles.ssoIconWrapper}>
                                <Image src="/images/apple_logo.svg" alt="Apple" width={26} height={26} />
                            </div>
                            <span>Apple</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
} 