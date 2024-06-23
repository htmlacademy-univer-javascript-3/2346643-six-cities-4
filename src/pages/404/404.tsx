import './404.css';

import { useNavigate } from 'react-router-dom';
import { PageRoutes } from '../../constants';
import { useCallback, useEffect } from 'react';


function NotFoundPage() {
  const navigate = useNavigate();
  const returnToMain = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      navigate(PageRoutes.Main);
    }
  }, [navigate]);

  useEffect(() => {
    document.addEventListener('keydown', returnToMain, false);
    return () => {
      document.removeEventListener('keydown', returnToMain, false);
    };
  }, [returnToMain]);

  return (
    <div className="page404">
      <div className='container404'>
        <span className="title">404 Not Found</span>
        <p>
  Error 404: Page not found.<br />
        </p>
        <div>Press Enter to continue _</div>
      </div>
    </div>
  );
}

export default NotFoundPage;
