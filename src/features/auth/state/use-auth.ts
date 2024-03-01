import { useEffect } from 'react';
import { atom, useSetAtom } from 'jotai';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/lib/firebase/settings';
import { Customer } from '../types/customer';
import { createData, getData } from '@/lib/firebase/fire-store';

type CustomerState = Customer | null | undefined;

export const customerAtom = atom<CustomerState>(undefined);

export const useAuthState = () => {
  const setCustomer = useSetAtom(customerAtom);

  useEffect(() => {
    const subscribe = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          const currentCustomer = (await getData(
            `users/${firebaseUser.uid}`,
          )) as Customer;
          if (currentCustomer) {
            setCustomer(currentCustomer);
          } else {
            const newCustomer: Customer = {
              id: firebaseUser.uid,
              name: firebaseUser.displayName || `USER_${firebaseUser.uid}`,
              gender: 'none',
              imageUrl: 'images/users/default/default-customer.png',
            };
            await createData(`users/${firebaseUser.uid}`, newCustomer);
            setCustomer(newCustomer);
          }
        } else {
          setCustomer(null);
        }
      });

      return unsubscribe;
    };

    const unsubscribe = subscribe();

    // コンポーネントのアンマウント時に購読を解除する
    return () => {
      unsubscribe.then((unsub) => unsub());
    };
  }, []); // 空の依存配列を渡してマウント時に一度だけ実行されるようにする
};
