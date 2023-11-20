"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { createAuthTokenManager } from "@/src/entities/auth/utils";
import styles from "./LoginForm.module.scss";
import Heading from "@/src/shared/ui/typography/Heading";
import CommonInputGroup from "@/src/shared/ui/form/CommonInputGroup";
import CommonLabel from "@/src/shared/ui/form/CommonLabel";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import PasswordInput from "@/src/shared/ui/inputs/PasswordInput";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { ValidationErrors } from "@/src/shared/utils/types";
import { cn, isNotEmpty } from "@/src/shared/utils/functions";
import { useLoginMutation } from "@/src/shared/api-client";
import Loader from "@/src/shared/ui/loaders/Loader";

type LoginFormErrors = {
    username?: ValidationErrors;
    password?: ValidationErrors;
};

const LoginForm = () => {
    const router = useRouter();
    const [login, { isLoading }] = useLoginMutation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    //Polyfill for username/password autocompletion from browser
    useEffect(() => {
        const passwordInterval = setInterval(() => {
            if (isNotEmpty(passwordRef.current)) {
                setPassword(passwordRef.current.value);
                clearInterval(passwordInterval);
            }
        }, 100);
        const usernameInterval = setInterval(() => {
            if (isNotEmpty(usernameRef.current)) {
                setEmail(usernameRef.current.value);
                clearInterval(usernameInterval);
            }
        }, 100);
        return () => {
            clearInterval(usernameInterval);
            clearInterval(passwordInterval);
        };
    }, []);

    const isFormFilled = () => {
        return email !== "" && password !== "";
    };

    const validateForm = () => {
        const errors: LoginFormErrors = {};
        if (email === "") {
            errors.username = ["Username is not filled"];
        }
        if (password === "") {
            errors.password = ["Password is not filled"];
        }
        return errors;
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length !== 0) {
            return;
        }
        login({ email, password }).then(response => {
            if ("data" in response) {
                const token = response.data;
                const manager = createAuthTokenManager();
                manager.create(token);
                router.push("/home");
                return;
            }
        });
    };

    return (
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <Heading headingType={HEADING_TYPE.H1} className={cn(styles.login_form__heading)}>
                Login
            </Heading>
            <div className={styles.login_form__inputs}>
                <CommonInputGroup>
                    <CommonLabel htmlFor="username">Email</CommonLabel>
                    <CommonInput id="username" value={email} onChange={setEmail}>
                        <CommonInput.Container>
                            <CommonInput.Input autoFocus ref={usernameRef} />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputGroup>
                <CommonInputGroup>
                    <CommonLabel htmlFor="password">Password</CommonLabel>
                    <PasswordInput id="password" value={password} onChange={setPassword}>
                        <PasswordInput.Container>
                            <PasswordInput.Input ref={passwordRef} />
                        </PasswordInput.Container>
                    </PasswordInput>
                </CommonInputGroup>
            </div>
            <PrimaryButton color={PRIMARY_BUTTON_COLOR.YELLOW}>
                <Button type="submit" disabled={!isFormFilled()}>
                    {isLoading ? <Loader dark /> : "Login"}
                </Button>
            </PrimaryButton>
        </form>
    );
};

export default LoginForm;
