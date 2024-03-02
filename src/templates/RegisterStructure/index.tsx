import React, { useEffect, useState } from "react";
import { PageContainer } from "../../Molecules/PageContainer";
import { InputContainer, LoginLink, LoginLinkContainer, LoginText, RegisterButtonContainer, RegisterText, TitleContainer, TitlePage } from "./styles";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { colors } from "../../Styles/theme";
import { db, firebaseConfig } from "../../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from "../../stores/User";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { UserModel } from "../../stores/User/types";
import { GenericInput } from "../../Molecules/GenericInput";
import { GenericButton } from "../../Molecules/GenericButton";
import { AlertModal } from "../../Molecules/alert-modal";
import { useLoading } from "../../stores/Loading";
import { LoadingComponent } from "../../Organisms/LoadingComponent";
import { LogoTitle } from "../../Molecules/LogoTitle";

export const RegisterStructure = ({ navigation }: any) => {
    const [user, setUserState] = useState();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [messageError, setMessageError] = useState<string>('');

    const { isLoading, setIsLoading } = useLoading(state => state);
    const { setUser } = useUser(state => state)

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const onAuthStateChanged = async () => {
        setIsLoading(true)
        if (email !== "" && password !== "") {
            setMessageError("");
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed in 

                    const user = userCredential.user;
                    const userModel: UserModel = {
                        email: user.email || "",
                        displayName: "",
                        photoURL: "",
                        phoneNumber: "",
                        uid: user.uid,
                        services: [],
                        country: "",
                        description: "",
                        isProfessional: false,
                        id: "",

                    }
                    AsyncStorage.setItem('@user', JSON.stringify(userModel))
                    try {
                        const docRef = await addDoc(collection(db, "users"), userModel);
                        userModel.id = docRef.id
                        try {

                            const docRefUpdate = await updateDoc(doc(db, "users", userModel.id), userModel);
                            console.log("Document updated with ID: ", docRefUpdate);
                        } catch (e) {
                            console.error("Error updating document: ", e);
                        }
                        const userAccount = await signInWithEmailAndPassword(auth, email, password)
                            .catch((error) => {
                                if (error.code === "auth/user-not-found" || error.code === "auth/invalid-login-credentials") {
                                    setMessageError("Atenção!\nUsuário não encontrado");
                                }

                                if (error.code === "auth/invalid-email") {
                                    setMessageError("Atenção\nEste endereço de email é inválido!");
                                }
                            });
                        AsyncStorage.setItem('@user', JSON.stringify(user))
                        setUser(userModel)
                        console.log("Document written with ID: ", docRef.id);
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    if (errorCode === "auth/invalid-email") {
                        setMessageError("Atenção\nEste endereço de email é inválido!");
                    }

                    if (errorCode === "auth/weak-password") {
                        setMessageError("Atenção\nA senha deve ter no mínimo 6 caracteres");
                    }
                    if (errorCode === "auth/email-already-in-use") {
                        setMessageError("Atenção\nUsuário já cadastrado!");
                    }
                })
                .finally(() => {
                    setIsLoading(false)
                });



        } else {
            setMessageError("Preencha os campos");
            setTimeout(() => {
                setIsLoading(false)
            }, 500)
        }
    };

    useEffect(() => {
        AsyncStorage.removeItem('@user')
    }, [])


    return (
        <PageContainer>
            <>
                <TitleContainer>
                    <LogoTitle />
                    <TitlePage>Registre sua conta</TitlePage>
                </TitleContainer>
                <InputContainer>

                    <GenericInput
                        placeholder="Email"
                        marginTop={'5%'}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(text: string) => setEmail(text)}

                    />
                    <GenericInput
                        placeholder="Password"
                        secureTextEntry
                        marginTop={'5%'}
                        value={password}
                        onChangeText={(text: string) => setPassword(text)}
                        rightIcon

                    />
                </InputContainer>
                <LoginLinkContainer>
                    <LoginLink onPress={() => navigation.navigate('LoginScreen')}>
                        <LoginText>Ir para Login</LoginText>
                    </LoginLink>
                </LoginLinkContainer>
                {isLoading ?
                    <LoadingComponent />
                    :
                    <RegisterButtonContainer>
                        <GenericButton onPress={onAuthStateChanged}>
                            <>
                                <RegisterText>Registrar </RegisterText>
                                <MaterialIcons name="login" size={24} color={colors.yellowPrimary} />
                            </>
                        </GenericButton>
                    </RegisterButtonContainer>}
                <AlertModal
                    visible={!!messageError}
                    title={messageError}
                    onCancel={() => setMessageError("")}
                    confirmText="Ok"
                    onConfirm={() => setMessageError("")}
                    onSwipeCancel={() => setMessageError("")}
                />
            </>
        </PageContainer >
    )
}