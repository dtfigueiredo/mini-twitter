import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

const MAX_CHARACTERS = 250;

const tweetContentState = atom<string>({
  key: 'tweetContentKey',
  default: '',
});

export const NewTweet = () => {
  const [tweetContent, setTweetContent] = useRecoilState(tweetContentState);

  const emptyTweet = tweetContent.length === 0;
  const invalidTweet = tweetContent.length > MAX_CHARACTERS;

  const handleSubmit = () => {
    alert(tweetContent);
    setTweetContent('');
  };

  return (
    <div className='py-2 px-4 flex justify-start items-start gap-4 border-b border-silver'>
      <img
        className='mt-4 w-7'
        src='../avatar.png'
        alt='avatar'
      />

      <form className='w-full py-4 space-y-4'>
        <h1 className='text-xl font-bold'>Página Inicial</h1>

        <textarea
          className='w-full bg-transparent outline-none resize-none'
          value={tweetContent}
          onChange={(e) => setTweetContent(e.target.value)}
          rows={3}
          placeholder='O que está acontecendo?'
        />

        <div className='w-full flex justify-end items-center gap-4'>
          <div className='text-xs'>
            <span className={`${emptyTweet && 'text-silver'} ${invalidTweet && 'text-red-400'}`}>{tweetContent.length}</span>
            <span> / </span>
            <span className='text-tweetBlue'>{MAX_CHARACTERS}</span>
          </div>

          <button
            type='button'
            onClick={handleSubmit}
            disabled={emptyTweet || invalidTweet}
            className='py-2 px-6 bg-tweetBlue text-sm border-none rounded-full disabled:bg-onix disabled:opacity-30'>
            Tweetar
          </button>
        </div>
      </form>
    </div>
  );
};
