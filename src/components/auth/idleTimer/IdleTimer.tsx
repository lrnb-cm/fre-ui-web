import React, { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import ReactDOM from 'react-dom';
import './styles.css';
export default function IdleTimer() {
   // Set timeout values
   const timeout = 1000 * 10;
   const promptTimeout = 1000 * 30 * 30;

   // Modal open state
   const [open, setOpen] = useState(false);

   // Time before idle
   const [remaining, setRemaining] = useState(0);

   const onPrompt = () => {
      // onPrompt will be called after the timeout value is reached
      // In this case 30 minutes. Here you can open your prompt.
      // All events are disabled while the prompt is active.
      // If the user wishes to stay active, call the `reset()` method.
      // You can get the remaining prompt time with the `getRemainingTime()` method,
      setOpen(true);
      setRemaining(promptTimeout);
   };

   const onIdle = () => {
      // onIdle will be called after the promptTimeout is reached.
      // In this case 30 seconds. Here you can close your prompt and
      // perform what ever idle action you want such as log out your user.
      // Events will be rebound as long as `stopOnMount` is not set.
      setOpen(false);
      setRemaining(0);
   };

   const onActive = () => {
      // onActive will only be called if `reset()` is called while `isPrompted()`
      // is true. Here you will also want to close your modal and perform
      // any active actions.
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
      <div className="timer-modal" style={{ display: open ? 'flex' : 'flex' }}>
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
