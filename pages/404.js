import { Box, Image, Text } from '@skynexui/components';
import defaultImg from '../img/404.jpg';
import appConfig from '../config.json';

export default function Page404() {
  return (
    <>
      <div
      /* style={{
          backgroundImage: `url(${defaultImg.src})`,
          backgroundSize: 'center',
          backgroundRepeat: 'no-repeat'
        }} */
      >
        <h1>Erro 404</h1>
        <h2>Acho que você rolou 1 ao procurar a página...</h2>
        <style jsx>
          {`
            div {
              display: flex;
              align-content: center;
              justify-content: center;
              flex-wrap: wrap;
              text-align: center;
              gap: 20px;
            }
            h1 {
              width: 100%;
              font-size: 4rem;
            }
            h2 {
              width: 100%;
              font-size: 2rem;
            }
          `}
        </style>
      </div>
    </>
  );
}
