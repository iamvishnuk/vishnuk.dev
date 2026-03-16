'use client';

import { motion } from 'motion/react';
import { Coding } from '@/icons/coding';
import { Sleeping } from '@/icons/sleeping';
import { IPresence } from '@/types';
import { useEffect, useState, useMemo, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { formatDistanceToNow } from 'date-fns';
import Typewriter from './type-writer';

type PresenceCardProps = {
  initialData: IPresence | null;
};

const STATUS_MESSAGES: Record<string, string[]> = {
  // App-specific messages when status is "coding"
  'coding:Neovim': [
    'Crafting code in Neovim ⚡',
    'vim motions go brrr',
    'hjkl is the way',
    ':wq and ship it',
    'Living in the terminal'
  ],
  'coding:Vim': [
    'Old school, still rules',
    ':wq is all you need',
    'hjkl supremacy',
    'The OG editor 🏛️',
    'Modal editing ftw'
  ],
  'coding:VS Code': [
    'Hacking in VS Code',
    "Extensions loaded, let's go",
    'Ctrl+Shift+Everything',
    'IntelliSense activated'
  ],
  'coding:Cursor': [
    'AI-powered coding 🤖',
    'Cursor + AI = magic',
    'Let the AI cook',
    'Pair programming with AI',
    'Shipping at lightspeed'
  ],
  'coding:Antigravity': [
    'Defying gravity with code 🚀',
    'Antigravity mode engaged',
    'Coding beyond limits',
    'Zero gravity, max velocity',
    'AI collab in full swing'
  ],
  // Generic coding messages (fallback)
  coding: [
    'Shipping something cool 🚀',
    'Turning coffee into code ☕',
    'In the zone, do not disturb',
    'Making things happen ✨',
    'Building the future, one commit at a time',
    'Debugging reality',
    'Pushing pixels & logic'
  ],
  // Idle messages
  idle: [
    'Taking a breather 🍃',
    'AFK for a bit',
    'Recharging creativity 🔋',
    'Probably grabbing coffee ☕',
    'Stepping away momentarily',
    'Be right back...',
    'Gone exploring 🌎'
  ],
  // Sleeping messages
  sleeping: [
    "Catching some Z's 💤",
    'Dreaming in code',
    'Night mode activated 🌙',
    'See you after sunrise ☀️',
    'Off to dreamland'
  ]
};

function getStatusMessage(
  status: string,
  app: string | null,
  messageIndex: number
): string {
  // Try app-specific messages first
  const appKey = `${status}:${app}`;
  if (STATUS_MESSAGES[appKey]) {
    const msgs = STATUS_MESSAGES[appKey];
    return msgs[messageIndex % msgs.length];
  }
  // Fall back to status-level messages
  const msgs = STATUS_MESSAGES[status] || STATUS_MESSAGES['idle'];
  return msgs[messageIndex % msgs.length];
}

function isSleeping(presence: IPresence | null): boolean {
  if (!presence) return false;

  const now = new Date();
  const currentHour = now.getHours();
  const isNightTime = currentHour >= 0 && currentHour < 8;

  if (!isNightTime) return false;

  const lastSeen = new Date(presence.last_seen);
  const diffMs = now.getTime() - lastSeen.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);

  return diffHours > 1;
}

type StatusState = 'coding' | 'idle' | 'sleeping';

function getStatusState(presence: IPresence | null): StatusState {
  if (isSleeping(presence)) return 'sleeping';
  if (presence?.status === 'coding') return 'coding';
  return 'idle';
}

const statusConfig: Record<
  StatusState,
  {
    label: string;
    dotColor: string;
    dotGlow: string;
    labelColor: string;
    titleHoverColor: string;
  }
> = {
  coding: {
    label: 'currently',
    dotColor: 'bg-green-500',
    dotGlow: 'shadow-[0_0_8px_rgba(34,197,94,0.6)]',
    labelColor: 'text-green-600/90 dark:text-green-500/90',
    titleHoverColor:
      'group-hover:text-green-600 dark:group-hover:text-green-400'
  },
  idle: {
    label: 'last seen',
    dotColor: 'bg-amber-400',
    dotGlow: 'shadow-[0_0_8px_rgba(251,191,36,0.5)]',
    labelColor: 'text-amber-600/90 dark:text-amber-400/90',
    titleHoverColor:
      'group-hover:text-amber-600 dark:group-hover:text-amber-400'
  },
  sleeping: {
    label: 'sleeping',
    dotColor: 'bg-indigo-400',
    dotGlow: 'shadow-[0_0_8px_rgba(129,140,248,0.5)]',
    labelColor: 'text-indigo-600/90 dark:text-indigo-400/90',
    titleHoverColor:
      'group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
  }
};

const PresenceCard = ({ initialData }: PresenceCardProps) => {
  const supabase = createClient();

  const [presence, setPresence] = useState<IPresence | null>(initialData);
  const [messageIndex, setMessageIndex] = useState(0);

  const statusState = useMemo(() => getStatusState(presence), [presence]);
  const config = statusConfig[statusState];

  const currentMessage = useMemo(
    () => getStatusMessage(statusState, presence?.app ?? null, messageIndex),
    [statusState, presence?.app, messageIndex]
  );

  // Live "last seen" relative time
  const [, setTick] = useState(0);
  const lastSeenText = useMemo(() => {
    if (!presence?.last_seen) return null;
    return formatDistanceToNow(new Date(presence.last_seen), {
      addSuffix: true
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presence?.last_seen, setTick]);

  // Re-check sleeping status & last seen every 30s
  useEffect(() => {
    const interval = setInterval(() => {
      setPresence((prev) => (prev ? { ...prev } : null));
      setTick((t) => t + 1);
    }, 30_000);
    return () => clearInterval(interval);
  }, []);

  // Rotate status messages every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((i) => i + 1);
    }, 5_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel('presence-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'presence' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setPresence(payload.new as IPresence);
            setMessageIndex(0);
          }
          if (payload.eventType === 'UPDATE') {
            setPresence(payload.new as IPresence);
            setMessageIndex(0);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  const showSleepingIcon =
    statusState === 'sleeping' || presence?.status !== 'coding';

  return (
    <div className='group relative flex w-full cursor-default items-center justify-center gap-4 px-6 py-6 transition-all duration-500 sm:gap-8 sm:px-10'>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className='relative flex items-center'
      >
        {showSleepingIcon ? (
          <Sleeping className='relative z-10 size-28 drop-shadow-sm transition-transform duration-500 group-hover:scale-105 sm:size-32' />
        ) : (
          <Coding className='relative z-10 size-28 drop-shadow-sm transition-transform duration-500 group-hover:scale-105 sm:size-32' />
        )}
      </motion.div>
      <div className='flex w-full flex-col justify-center'>
        <div className='space-y-3'>
          <div className='flex items-center gap-3'>
            <div className='relative flex items-center justify-center'>
              <div
                className={`relative z-10 size-2 rounded-full ${config.dotColor} ${config.dotGlow}`}
              />

              <motion.div
                className={`absolute size-2 rounded-full ${config.dotColor}`}
                animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />

              <motion.div
                className={`absolute size-2 rounded-full ${config.dotColor}`}
                animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 1
                }}
              />
            </div>
            <div
              className={`font-mono text-[11px] font-bold tracking-[0.2em] uppercase sm:text-xs ${config.labelColor}`}
            >
              {config.label}
            </div>
          </div>

          <div className='space-y-1.5'>
            <div
              className={`font-mono text-base font-bold tracking-tight text-gray-800 transition-colors duration-300 sm:text-lg dark:text-gray-200 ${config.titleHoverColor}`}
            >
              {statusState === 'sleeping'
                ? 'Sleeping 💤'
                : (presence?.app ?? 'Offline')}
            </div>

            <div className='flex items-center gap-2.5 font-mono text-xs text-gray-500 sm:text-sm dark:text-gray-400'>
              <Typewriter text={currentMessage} />
            </div>

            {lastSeenText && (
              <div className='mt-1 font-mono text-[10px] text-gray-400 sm:text-xs dark:text-gray-500'>
                {statusState === 'coding' ? 'active' : 'last seen'}{' '}
                {lastSeenText}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresenceCard;
