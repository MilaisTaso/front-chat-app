// CustomerContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase/settings';
import { Customer } from '../types/customer';
import { createData, getData } from '@/lib/firebase/fire-store';

type CustomerContextType = Customer | null | undefined;

// コンテキストの初期値を指定します。ここでは、customer と setCustomer 両方を含めます。
export const CustomerContext = createContext<CustomerContextType>(undefined);

type CustomerProviderProps = {
  children: ReactNode;
};

export const CustomerProvider: React.FC<CustomerProviderProps> = ({ children }) => {
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const appCustomer = (await getData(`users/${firebaseUser.uid}`)) as Customer;

        if (appCustomer) {
          setCustomer(appCustomer);
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
  }, []);

  // コンテキストプロバイダーに値を渡します。
  return (
    <CustomerContext.Provider value={customer}>
      {children}
    </CustomerContext.Provider>
  );
};
