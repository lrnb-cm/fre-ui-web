import { ComponentType } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { LOGIN } from '../../../constants/routes';
import { useAuthContext } from '../authProvider/AuthContext';

export type AuthGuardProps = {
  children: any;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const { authenticated } = useAuthContext();

  return (
    <>{authenticated === true ? <>{children} </> : <Navigate to={LOGIN} />}</>
  );
}
