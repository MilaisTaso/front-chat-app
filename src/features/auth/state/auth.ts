// src/hooks/useAuthState.ts
import { useEffect } from "react";
import { atom, useSetAtom } from 'jotai';
import { onAuthStateChanged } from "firebase/auth";

import { auth } from '@/lib/firebase/settings'
import { Customer } from "../types/customer";
import { createData, getData } from "@/lib/firebase/fire-store";

type CustomerState = Customer | null;


export const customerAtom = atom<CustomerState>(null)

export const useAuthState = () => {
  const setCustomer = useSetAtom(customerAtom);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {

        const appCustomer = await getData(`users/${firebaseUser.uid}`) as Customer;

        if (appCustomer) {
          setCustomer(appCustomer);
        } else {
          const currentCustomer: Customer = {
            id: firebaseUser.uid,
            name: firebaseUser.displayName || `USER_${firebaseUser.uid}`,
            gender: 'none',
            imageUrl: '',
          };
          await createData(`users/${firebaseUser.uid}`, currentCustomer)
          setCustomer(currentCustomer);
        }
      } else {
        setCustomer(null);
      }
    });

    return () => unsubscribe();
  }, [setCustomer]);
};
