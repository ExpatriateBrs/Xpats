import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useUser } from "../stores/User";

export const getAllUsers = async () => {
    const snapshot = await getDocs(collection(db, "users"));
    const users = snapshot.docs.map((doc) => doc.data());

    return users;
}

export const getAllProfessionalsUsers = async () => {
    
    const users = await getAllUsers();
    const professionalsUsers = users.filter((user) => user.isProfessional);
    return professionalsUsers
}

export const getUserByDB = async () => {
    const {setUid, setUser, user} = useUser.getState()
    const querySnapshot = await getDocs(collection(db, "users"));
    const userByDb = querySnapshot.docs?.find((doc) => doc.data().uid === user.uid);
    setUid(userByDb?.data().uid)
    setUser(userByDb?.data())
  }