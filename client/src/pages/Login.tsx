import Logo from '../assets/codarme-logo.png';

export const Login = () => {
  return (
    <div className='flex min-h-screen'>
      <div className='hidden flex-1 lg:flex justify-center items-center bg-tweetBlue'>
        <img
          src={Logo}
          alt='logotipo twitter'
        />
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <form
          action='#'
          className='w-4/5 max-w-[600px] flex flex-col justify-center items-start gap-4'>
          <img
            className='lg:hidden w-8 h-8 mb-4'
            src={Logo}
            alt='logotipo twitter'
          />
          <h2 className='font-bold text-5xl'>Fazer Login</h2>

          <div className='w-full mt-8 lg:mt-16 flex flex-col justify-center items-center gap-4'>
            <input
              type='text'
              placeholder='E-mail ou nome de usuário'
              className='w-full p-4 bg-transparent border border-silver rounded-lg placeholder:text-silver'
            />
            <input
              type='password'
              placeholder='Digite sua senha'
              className='w-full p-4 bg-transparent border border-silver rounded-lg placeholder:text-silver'
            />
          </div>

          <button
            className='w-full mt-8 p-4 bg-tweetBlue border-none rounded-full'
            type='button'>
            Entrar
          </button>

          <p className='mt-8 text-silver'>
            Não tem uma conta?{' '}
            <a
              href='#'
              className='text-tweetBlue'>
              Inscreva-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
