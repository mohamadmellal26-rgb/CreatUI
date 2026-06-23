import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.title}>Your cart is empty</h2>
            <p className={styles.description}>
                Buy <strong>All Access Pass</strong> to get unlimited access to all products.
            </p>
            <a href='/pricing' className={styles.ctaButton}>
                Get All Access Pass
            </a>
        </div>
    );
}