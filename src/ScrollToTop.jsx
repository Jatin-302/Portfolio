
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ScrollToTop() {
  return (
    <>
    const {"{"} pathname {"}"} = useLocation();
    useEffect(() =&gt; {"{"}
    window.scrollTo(0, 0);
    {"}"}, [pathname]); return null;
  </>);
}

export default ScrollToTop;
