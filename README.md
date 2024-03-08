# Simple E-commerce



## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Emotion.js](https://emotion.sh/docs/introduction)

## Iniciando o Projeto

1. **Instalação de Dependências**
   ```bash
   npm install


## Rodando o Aplicativo em Ambiente de Desenvolvimento

npm run dev

O aplicativo estará disponível em http://localhost:3000/


## Estrutura do Projeto


pages/: Contém os componentes que correspondem às páginas do aplicativo.
components/: Agrupa os componentes reutilizáveis.
styles/: Pode conter arquivos relacionados à estilização global.

Estilização com Emotion.js
Exemplo básico de estilização com Emotion.js:

tsx
Copy code
// styles/StyledComponent.tsx
import styled from '@emotion/styled';

export const StyledComponent = styled.div`
  color: #333;
  background-color: #f0f0f0;
`;