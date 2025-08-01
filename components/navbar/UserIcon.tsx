import { currentUser } from '@clerk/nextjs/server';

import { LuUser } from 'react-icons/lu';

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

  return <LuUser className="h-6 w-6 rounded-full bg-primary text-white" />;
}
