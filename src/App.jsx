import React, { useEffect, useState } from 'react';
import Home from './pages/Home';

const App = () => {
      const [daysLeft, setDaysLeft] = useState(null);

      useEffect(() => {
            const dueDate = new Date('2024-07-27');
            const daysDeadline = 60;

            const currentDate = new Date();
            const utc1 = Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
            const utc2 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
            const days = Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));

            setDaysLeft(days);
      }, []);

      return (
            <div>
                  <div className="countdown">
                        {daysLeft !== null ? (
                              <p>Days left until deadline: {daysLeft}</p>
                        ) : (
                              <p>Loading...</p>
                        )}
                  </div>
                  <div className="content" style={{ opacity: daysLeft !== null ? daysLeft / 60 : 1 }}>
                        {/* Components inside this div will have opacity that changes with days left */}
                        <h1>Dear Client I hope you can still read this message...</h1>
                        <Home />
                  </div>
            </div>
      );
};

export default App;
