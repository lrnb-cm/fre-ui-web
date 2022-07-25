import React, { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import ReactDOM from 'react-dom';
import './styles.css';
export default function IdleTimer() {
   // Set timeout values
   const timeout = 1000 * 10 * 400;
   const promptTimeout = 1000 * 30;

   // Modal open state
   const [open, setOpen] = useState(false);

   // Time before idle
   const [remaining, setRemaining] = useState(0);

   const onPrompt = () => {
      setOpen(true);
      setRemaining(promptTimeout);
   };

   const onIdle = () => {
      setOpen(false);
      setRemaining(0);
      //call logout functionality
      console.log('log out ........=>');
   };

   const onActive = () => {
      setOpen(false);
      setRemaining(0);
   };

   const { getRemainingTime, isPrompted, activate } = useIdleTimer({
      timeout,
      promptTimeout,
      onPrompt,
      onIdle,
      onActive,
   });

   const handleStillHere = () => {
      setOpen(false);
      activate();
   };

   useEffect(() => {
      const interval = setInterval(() => {
         if (isPrompted()) {
            setRemaining(Math.ceil(getRemainingTime() / 1000));
         }
      }, 1000);
      return () => {
         clearInterval(interval);
      };
   }, [getRemainingTime, isPrompted]);

   return (
      <div className="timer-modal" style={{ display: open ? 'flex' : 'none' }}>
         <div className="modal-content">
            <div className="modal-title">ATTENTION!!!!</div>
            <div className="modal-text-time">Inactivity detected</div>
            <div className="modal-text">
               Logging you out in{' '}
               <span className="modal-text-time">{remaining} </span> secs
            </div>
            <button onClick={handleStillHere} className="modal-btn">
               Don't Log Out
            </button>
         </div>
      </div>
   );
}
