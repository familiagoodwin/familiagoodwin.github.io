import React, { useContext } from 'react'
import GlobalVarsContext from '../contexts/context/GlobalVars'

const NewMenu = () => {
  const { setClassCss, setOptionsMenu } = useContext(GlobalVarsContext);

  // console.log('oi');

  setClassCss((prev) => ({...prev, mainCape: 'noBody animateSec'}));
  setOptionsMenu({ opAlbum: false, opTimeLine: false, newMenu: false });

  return (<div>NOVO MENU</div>);
}

export default NewMenu;