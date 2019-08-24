export const getStateStorage = () => {

    const storageApp = localStorage.getItem('app');
    const storageModulo = localStorage.getItem('modulo');

    if (storageApp === null && storageModulo === null ){
        return undefined;
    }

    const stateStorage = {
        app : JSON.parse( storageApp ),
        modulo : JSON.parse( storageModulo )
    };

    return stateStorage;
};

export const setStateStorage = state => {    
    localStorage.setItem('app', JSON.stringify(state.app));
    localStorage.setItem('modulo', JSON.stringify(state.modulo));
}