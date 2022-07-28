import React, { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import ReactDOM from 'react-dom';
import { useMutation } from '@apollo/client';
import { LOG_OUT } from '../../loginContainer/queries/queries';
import { useNavigate } from 'react-router-dom';

import './styles.css';
export default function IdleTimer() {
   const [logout] = useMutation(LOG_OUT);
   const navigate = useNavigate();

   // Set timeout values
   let inActivetimeout = 15; //minutes;
   const promptTimeout = 1000 * 30;

   //get time out from company
   const user = sessionStorage.getItem('lilli_user') || null;
   if (user) {
      const userParsed = JSON.parse(user);
      inActivetimeout = userParsed?.company?.inactivity_allowance;
   }

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
      if (user) {
         const userParsed = JSON.parse(user);
         logout({
            variables: {
               email: userParsed?.email,
            },
         }).then(() => {
            sessionStorage.setItem('lilli_user', '');
            navigate('/');
         });
      }
   };

   const onActive = () => {
      setOpen(false);
      setRemaining(0);
   };

   const timeout = inActivetimeout * 1000 * 60;
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
