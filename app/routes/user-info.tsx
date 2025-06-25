import React from 'react';
import type { Route } from '../+types/root';
import UserInfoPage from '~/ui/userInfoPage/UserInfoPage';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'User Profile' },
    {
      name: 'description',
      content: 'View and update your user profile information',
    },
  ];
}

export default function UserInfo() {
  return <UserInfoPage />;
}