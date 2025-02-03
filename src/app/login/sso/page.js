'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './sso.module.css';

export default function LoginSSO() {
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
            // Handle SSO login logic here
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
                <button
                    className={styles.backButton}
                    onClick={() => router.push('/login')}
                >
                    ← Back
                </button>

                <h1 className={styles.title}>Login via Single Sign-On</h1>
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
            </div>
        </div>
    );
} 