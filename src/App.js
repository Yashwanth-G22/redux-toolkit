import 'reflect-metadata';
import { Child } from "./inversify/child";
import { YouTubeForm } from "./Components/react-hook-form/youTubeForm";
import { Provider } from 'inversify-react';
import { container } from './inversify/dependencies';
import React from 'react';

const App: React.FC = () =>  {
  return (
    <Provider container={container}>
      <div>
        <YouTubeForm />
        <Child />
      </div>
    </Provider>
  );
}

export default App;
