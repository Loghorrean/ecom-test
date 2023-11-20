import LoginForm from "@/src/features/auth/LoginForm";
import styles from "./styles.module.scss";

export default function LoginPage() {
    return (
        <div className={styles.login_container}>
            <LoginForm />
        </div>
    );
}
