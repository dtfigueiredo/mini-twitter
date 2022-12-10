import { NewTweet } from '../components/NewTweet';
import { Tweet } from '../components/Tweet';

export const Content = () => {
  return (
    <>
      <NewTweet />

      <Tweet
        avatar='turquoise'
        user='Daniel Figueiredo'
        userTag='dtfigueiredo'
        content='Marcação de estilos e tamanhos'
        isVerified
      />

      <Tweet
        avatar='purple'
        user='Naxulha Figueiredo'
        userTag='anajuliafs'
        content='Marcação de estilos e tamanhos'
        isVerified
      />

      <Tweet
        avatar='orange'
        user='Ikkzinho Figueiredo'
        userTag='lil-Ikki'
        content='Marcação de estilos e tamanhos'
        isVerified={false}
      />

      <Tweet
        avatar='green'
        user='Pippin Figueiredo'
        userTag='lilCoccumber'
        content='Marcação de estilos e tamanhos'
        isVerified={false}
      />

      <Tweet
        avatar='golden'
        user='Antonio Figueiredo'
        userTag='tonnytonny'
        content='Marcação de estilos e tamanhos'
        isVerified={false}
      />
    </>
  );
};
