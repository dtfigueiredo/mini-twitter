import Verified from '../assets/verified.png';
import Heart from '../assets/heart.png';

interface TweetProps {
  avatar: string;
  user: string;
  userTag: string;
  content: string;
  isVerified: boolean;
}

const VerifiedIcon = () => {
  return (
    <img
      src={Verified}
      alt='logo verificado'
    />
  );
};

const HeartIcon = () => {
  return (
    <img
      src={Heart}
      alt='Ícone Like'
    />
  );
};

export const Tweet = ({ avatar, user, userTag, content, isVerified }: TweetProps) => {
  return (
    <div className='py-2 px-4 flex justify-start items-start gap-4 border-b border-silver'>
      <img
        className='w-9 sm:w-12'
        src={`../avatar-${avatar}.png`}
        alt='Avatar do usuário'
      />

      <article className='w-full text-sm'>
        <header className='flex items-center gap-2'>
          <span className='font-bold'>{user}</span>
          {isVerified ? <VerifiedIcon /> : null}
          <span className='text-silver'>@{userTag} • 18hs</span>
        </header>

        <main>{content}</main>

        <footer className='mt-4 flex items-center gap-2'>
          <button className='h-4 w-4'>
            <HeartIcon />
          </button>
          <span>2M</span>
        </footer>
      </article>
    </div>
  );
};
