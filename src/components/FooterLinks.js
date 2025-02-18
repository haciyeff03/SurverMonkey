import Link from 'next/link';
import Image from 'next/image';
import styles from './FooterLinks.module.css';


export default function FooterLinks() {
    return (
        <div className={styles.footer}>
            <Link href="/reference">
                Reference
                <Image 
                    src="/external-link.svg" 
                    width={14} 
                    height={14} 
                    alt="" 
                    className={styles.externalLink}
                />
            </Link>
            <Link href="/terms">
                Terms of Use
                <Image 
                    src="/external-link.svg" 
                    width={14} 
                    height={14} 
                    alt="" 
                    className={styles.externalLink}
                />
            </Link>
            <Link href="/privacy">
                Privacy Notice
                <Image 
                    src="/external-link.svg" 
                    width={14} 
                    height={14} 
                    alt="" 
                    className={styles.externalLink}
                />
            </Link>
            <Link href="/privacy-california">
                Privacy Notice for California Residents
                <Image 
                    src="/external-link.svg" 
                    width={14} 
                    height={14} 
                    alt="" 
                    className={styles.externalLink}
                />
            </Link>
            <Link href="/cookie-policy">
                Cookie Policy
                <Image 
                    src="/external-link.svg" 
                    width={14} 
                    height={14} 
                    alt="" 
                    className={styles.externalLink}
                />
            </Link>
            <Link href="/do-not-sell">Do not sell or distribute my personal information</Link>
            <button onClick={() => console.log('Cookie settings clicked')}>
                Cookie settings
            </button>
        </div>
    );
} 