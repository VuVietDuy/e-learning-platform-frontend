import { collection } from "firebase/firestore";
import { db } from "../configs/firebase";

const coursesCollectionRef = collection(db, "courses");

