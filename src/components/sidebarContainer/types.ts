import React, { ReactNode } from 'react';

export type menuItemType = {
  text: React.Key;
  icon: any;
  open: Boolean;
  onClick: () => void;
};
