import { currentUser } from '@clerk/nextjs/server';

import { LuUser2 } from 'react-icons/lu';

export default async function UserIcon() {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={profileImage}
        alt="User profile image"
        className="h-6 w-6 rounded-full object-cover"
      />
    );
  }

  return <LuUser2 className="h-6 w-6 rounded-full bg-primary text-white" />;
}
