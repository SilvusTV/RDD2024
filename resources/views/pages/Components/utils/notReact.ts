export const notReact = (function (){
  let hooks:Array<any> = [];
  let idx = 0;

  function useState<T>(initialState: T): [T, (newState: T) => void] {
    let state = hooks[idx] ?? initialState;
    let _idx = idx;
    function setState(newState: T) {
      hooks[_idx] = newState;
    }
    idx++;
    return [state, setState];
  }
  function useEffect(callback: any, dependancyArray: Array<any>) {
    const oldDependancies = hooks[idx];
    let hasChanged = true;
    if (oldDependancies) {
      hasChanged = dependancyArray.some((dep, i) => !Object.is(dep, oldDependancies[i]));
    }
    hooks[idx] = dependancyArray;
    idx++;
    if (hasChanged) callback();
  }

  return {useState, useEffect}
})();
