import {useState, createContext} from 'react'

export const DataContext= createContext([]);

export const DataProvider=(props)=>{
  const [activeIndex, setActiveIndex] = useState(0);

  return(
    <div>
      <DataContext.Provider value={[activeIndex, setActiveIndex]}>
        {props.children}
      </DataContext.Provider >
    </div>
  );
}
