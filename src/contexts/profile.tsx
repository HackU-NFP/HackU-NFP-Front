import { createContext, useContext, useEffect, useReducer } from 'react';

export type ProfileContextProps = {
  profile?: {
    userId: string;
    displayName: string;
    pictureUrl?: string | undefined;
  } | null;
  isInClient: boolean;
};

export type ProfileAction = {
  type: 'LOGIN' | 'LOGOUT';
  profile?: {
    userId: string;
    displayName: string;
    pictureUrl?: string | undefined;
  };
  isInClient?: boolean;
};

const ProfileReducer: React.Reducer<ProfileContextProps, ProfileAction> = (
  state: ProfileContextProps,
  action: ProfileAction
): ProfileContextProps => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        profile: action.profile,
        isInClient: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        profile: null,
        isInClient: false,
      };
  }
};

export const ProfileContext = createContext<ProfileContextProps>({
  profile: null,
  isInClient: false,
});

export const ProfileDispatch = createContext<React.Dispatch<ProfileAction>>(
  (() => true) as React.Dispatch<ProfileAction>
);

const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ProfileReducer, {
    profile: null,
    isInClient: false,
  });

  useEffect(() => {
    const lineLogin = async () => {
      const liff = (await import('@line/liff')).default;

      // liffの初期化
      await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID as string });

      // liffで開かれていたら
      if (liff.isInClient()) {
        const profile = await liff.getProfile();
        dispatch({
          type: 'LOGIN',
          profile,
          isInClient: true,
        });
        return;
      }
      dispatch({
        type: 'LOGOUT',
      });
    };

    lineLogin();
  }, []);

  return (
    <ProfileContext.Provider value={state}>
      <ProfileDispatch.Provider value={dispatch}>
        {children}
      </ProfileDispatch.Provider>
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
