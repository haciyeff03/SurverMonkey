'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import useSignupStore from '@/store/signupStore';
import styles from './password.module.css';
import FooterLinks from '@/components/FooterLinks';

export default function CreatePassword() {
    const router = useRouter();
    const { email } = useSignupStore();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmError, setConfirmError] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        // Redirect if no email in store
        if (!email) {
            router.push('/signup');
        }
    }, [email, router]);

    const validatePassword = (pass) => {
        if (pass.length < 8) {
            return 'Password must be at least 8 characters long';
        }
        if (/(.)\1{2,}/.test(pass)) {
            return 'Password cannot contain repeated characters';
        }
        if (/^[0-9]+$/.test(pass)) {
            return 'Password cannot be all numbers';
        }
        if (/^[a-zA-Z]+$/.test(pass)) {
            return 'Password cannot be all letters';
        }
        if (/^[a-zA-Z0-9]+$/.test(pass) && !/[A-Z]/.test(pass)) {
            return 'Password must contain at least one uppercase letter';
        }
        return '';
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        const validationError = validatePassword(value);
        setError(validationError);

        if (confirmPassword && value !== confirmPassword) {
            setConfirmError('Passwords do not match');
        } else {
            setConfirmError('');
        }

        setIsValid(!validationError && (!confirmPassword || value === confirmPassword));
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);

        if (value !== password) {
            setConfirmError('Passwords do not match');
            setIsValid(false);
        } else {
            setConfirmError('');
            setIsValid(!error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            // Handle account creation
            console.log('Account created!');
        }
    };

    return (
        <>
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

                <div className={styles.passwordBox}>
                    <button
                        className={styles.backButton}
                        onClick={() => router.push('/signup')}
                    >
                        ← Back
                    </button>

                    <h1 className={styles.title}>Create a password</h1>

                    <div className={styles.emailDisplay}>
                        {email}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Enter password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className={error ? styles.inputError : ''}
                                required
                            />
                            {error && (
                                <div className={styles.errorMessage}>
                                    <span className={styles.errorIcon}>!</span>
                                    {error}
                                </div>
                            )}
                            <div className={styles.passwordHint}>
                                Please enter at least 8 characters. Do not use common words, names, consecutive or repeated characters.
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className={confirmError ? styles.inputError : ''}
                                required
                            />
                            {confirmError && (
                                <div className={styles.errorMessage}>
                                    <span className={styles.errorIcon}>!</span>
                                    {confirmError}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={`${styles.createButton} ${!isValid ? styles.buttonDisabled : ''}`}
                            disabled={!isValid}
                        >
                            Create an account
                        </button>
                    </form>
                </div>
            </div>
            <FooterLinks />
        </>
    );
} 