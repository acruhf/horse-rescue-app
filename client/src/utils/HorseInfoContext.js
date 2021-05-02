import React from 'react';

const HorseInfoContext = React.createContext({
    name: '',
    getHorseData: () => undefined,
});

export default HorseInfoContext;