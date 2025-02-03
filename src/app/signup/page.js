'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useSignupStore from '@/store/signupStore';
import styles from './signup.module.css';

export default function Signup() {
    const router = useRouter();
    const { setEmail: setStoreEmail } = useSignupStore();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [acceptMarketing, setAcceptMarketing] = useState(false);

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
        if (isValid && acceptTerms) {
            setStoreEmail(email);
            router.push('/signup/password');
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

            <div className={styles.signupBox}>
                <div className={styles.loginLink}>
                    <span>Don't have an account? </span>
                    <Link href="/login">Sign in</Link>
                </div>

                <h1 className={styles.title}>Create an account</h1>
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

                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={acceptTerms}
                                onChange={(e) => setAcceptTerms(e.target.checked)}
                                className={styles.hiddenCheckbox}
                                required
                            />
                            <div className={`${styles.checkmark} ${acceptTerms ? styles.checked : ''}`}>
                                {acceptTerms && "✓"}
                            </div>
                            <div className={styles.checkboxContent}>
                                <span>You accept </span>
                                <Link href="/terms" className={styles.link}>
                                    Terms of Use
                                    <Image
                                        src="/external-link.svg"
                                        width={14}
                                        height={14}
                                        alt=""
                                        className={styles.externalLink}
                                    />
                                </Link>
                                <span> and </span>
                                <Link href="/privacy" className={styles.link}>
                                    Privacy Notice
                                    <Image
                                        src="/external-link.svg"
                                        width={14}
                                        height={14}
                                        alt=""
                                        className={styles.externalLink}
                                    />
                                </Link>
                                <span>.</span>
                            </div>
                        </label>
                    </div>

                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={acceptMarketing}
                                onChange={(e) => setAcceptMarketing(e.target.checked)}
                                className={styles.hiddenCheckbox}
                            />
                            <div className={`${styles.checkmark} ${acceptMarketing ? styles.checked : ''}`}>
                                {acceptMarketing && "✓"}
                            </div>
                            <div className={styles.checkboxContent}>
                                You agree to receive product news and special offers via email. You can unsubscribe at any time from this email on the My Account page.
                            </div>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className={`${styles.nextButton} ${(!isValid || !acceptTerms) ? styles.buttonDisabled : ''}`}
                        disabled={!isValid || !acceptTerms}
                    >
                        Next
                    </button>
                </form>

                <div className={styles.ssoSection}>
                    <p>Or register via</p>
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