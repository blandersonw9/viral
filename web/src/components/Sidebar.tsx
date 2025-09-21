'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

interface SidebarItemProps {
  icon?: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  href, 
  onClick, 
  active = false 
}) => {
  const content = (
    <div className={cn(
      'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
      active 
        ? 'bg-primary text-primary-foreground' 
        : 'hover:bg-accent hover:text-accent-foreground'
    )}>
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span className="font-medium">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="w-full text-left">
      {content}
    </button>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const { user, logout } = useAuth();

  const menuItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
        </svg>
      ),
      label: 'Dashboard',
      href: '/',
      active: true,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      label: 'Profile',
      href: '/profile',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Settings',
      href: '/settings',
    },
  ];

  return (
    <div className={cn(
      'flex flex-col h-full bg-background border-r border-border',
      className
    )}>
      {/* Logo/Brand */}
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">Viral App</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={item.active}
          />
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-border">
        {user && (
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-medium">
                  {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {user.displayName || 'User'}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {user.email}
                </p>
              </div>
            </div>
            <Button
              onClick={logout}
              variant="outline"
              size="sm"
              className="w-full"
            >
              Sign Out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
