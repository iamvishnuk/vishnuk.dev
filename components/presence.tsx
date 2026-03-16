import { createClient } from '@/lib/supabase/client';
import PresenceCard from './presence-card';
import { IPresence } from '@/types';

const Presence = async () => {
  const supabse = await createClient();

  const { data }: { data: IPresence | null } = await supabse
    .from('presence')
    .select('*')
    .eq('id', process.env.PRESENCE_ROW_ID)
    .single();

  return (
    <div className='relative mt-16 max-w-full'>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
        <div className='w-full'>
          <PresenceCard initialData={data} />
        </div>
      </div>
    </div>
  );
};

export default Presence;
