import { collection, onSnapshot, getDocs, writeBatch, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "./firebase";
import { TEMPLES_DATA } from "../data/temples";
import type { Temple } from "../types";

const STORAGE_KEY = "temple_heritage_data";

// Seed local storage and default memory with fallback
export const getTemples = (): Temple[] => {
  if (typeof window === "undefined") return TEMPLES_DATA;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return TEMPLES_DATA;
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse stored temples", e);
    return TEMPLES_DATA;
  }
};

export const saveTemples = (temples: Temple[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(temples));
};

export const resetTemples = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
};

// Seeding standard data into Firestore if empty
export async function seedTemplesIfEmpty() {
  try {
    const querySnapshot = await getDocs(collection(db, "temples"));
    if (querySnapshot.empty) {
      console.log("Seeding default temple data into Firestore...");
      const batch = writeBatch(db);
      TEMPLES_DATA.forEach((temple) => {
        const docRef = doc(db, "temples", temple.id);
        batch.set(docRef, temple);
      });
      await batch.commit();
      console.log("Firestore seeding complete.");
    }
  } catch (error) {
    console.warn("Seeding or connection test warning: ", error);
  }
}

// Subscribe real-time
export const subscribeToTemples = (callback: (temples: Temple[]) => void) => {
  const collRef = collection(db, "temples");

  // Run async seed in the background
  seedTemplesIfEmpty().catch(err => console.error("Database seed check failed: ", err));

  return onSnapshot(
    collRef,
    (snapshot) => {
      if (snapshot.empty) {
        callback(TEMPLES_DATA);
      } else {
        const temples: Temple[] = [];
        snapshot.forEach((doc) => {
          temples.push(doc.data() as Temple);
        });
        // Sort by ID or name to keep order consistent
        temples.sort((a, b) => a.name.localeCompare(b.name));
        callback(temples);
      }
    },
    (error) => {
      // conform to Firestore error handler requirements
      handleFirestoreError(error, OperationType.LIST, "temples");
    }
  );
};

// Save a single temple to Firestore
export const saveTempleFirestore = async (temple: Temple) => {
  const docRef = doc(db, "temples", temple.id);
  try {
    await setDoc(docRef, temple);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `temples/${temple.id}`);
  }
};

// Delete a single temple from Firestore
export const deleteTempleFirestore = async (id: string) => {
  const docRef = doc(db, "temples", id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, `temples/${id}`);
  }
};
