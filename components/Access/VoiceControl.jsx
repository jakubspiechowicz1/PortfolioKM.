import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import * as FaIcons from 'react-icons/fa';
import { createPortal } from 'react-dom';
import '../../components/i18n';

const VoiceControl = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const recognitionRef = useRef(null); // useRef dla zarządzania instancją recognition
  const [isListening, setIsListening] = useState(false);
  const [showCommands, setShowCommands] = useState(false);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const { webkitSpeechRecognition } = window;
      recognitionRef.current = new webkitSpeechRecognition();
      recognitionRef.current.lang = i18n.language === 'pl' ? 'pl-PL' : (i18n.language === 'en-US');
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
  
      recognitionRef.current.onresult = (event) => {
        let lastResult = event.results[event.resultIndex];
        if (lastResult.isFinal) {
          const command = lastResult[0].transcript.trim().toLowerCase();
          console.log('Recognized command:', command);
          switch (command) {
            case 'przewiń w górę':
            case 'scroll up':
            
              window.scrollBy(0, -300);
              break;
            case 'przewiń w dół':
            case 'scroll down':
            
              window.scrollBy(0, 300);
              break;
            case 'wróć':
            case 'go back':
            
              if (window.history.length > 1) {
                window.history.back();
              }
              break;
            case 'strona główna':
            case 'home':
            
              window.location.href = '/';
              break;
            case 'moje prace':
            case 'my works':
            
              window.location.href = '/projects';
              break;
            case 'kontakt':
            case 'contact':
            
              window.location.href = '/contact';
              break;
            case 'Skontaktuj się':
            case 'contact me':
            
              window.location.href = '/contact';
              break;
            default:
              console.log('Unknown command');
              break;
          }
        }
      };

      recognitionRef.current.onend = () => {
        console.log('Speech recognition service disconnected');
        if (isListening) {
          recognitionRef.current.start();
          console.log('Voice recognition restarted');
        }
      };
  
      recognitionRef.current.onerror = (error) => {
        console.error('Speech recognition error:', error);
      };
    }
  
    // Subscribe to recognition events
    if (isListening) {
      try {
        recognitionRef.current.start();
        console.log('Voice recognition started');
      } catch (error) {
        console.error('Failed to start recognition:', error);
      }
    }
  
    // Cleanup function
    return () => {
      try {
        if (recognitionRef.current && recognitionRef.current.state !== 'inactive') {
          recognitionRef.current.stop();
          console.log('Voice recognition stopped');
        }
      } catch (error) {
        console.error('Failed to stop recognition:', error);
      }
    };
  }, [isListening, i18n.language]);

  const renderCommandsDialog = () => {
    return createPortal(
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
        <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md">
          <button
            onClick={() => setShowCommands(false)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200"
          >
            <FaIcons.FaTimes className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
          <h2 className="text-xl font-bold mb-4">{t('voiceActive')}</h2>
          <ul className="mb-4">
            <li>"Przewiń w górę" / "Scroll up"</li>
            <li>"Przewiń w dół" / "Scroll down"</li>
            <li>"Wróć" / "Go back""</li>
            <li>"Strona główna" / "Home"</li>
            <li>"Moje prace" / "My works"</li>
            <li>"Kontakt" / "Contact"</li>
            <li>"Skontaktuj się" / "Contact me"</li>
          </ul>
          <button
            onClick={() => setShowCommands(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {t('closebutton')}
          </button>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div>
      <button onClick={() => setIsListening(prev => !prev)} className="h-full w-full flex z-10 absolute">
        {isListening ? '' : ''}
      </button>

      {isListening && createPortal(
        <div className={`fixed bottom-0 sm:w-auto xl:w-[15%] flex items-center p-2 shadow-md transition-all duration-300 
                  bg-red-500 text-white ${isListening ? "h-[60px]" : "h-0 opacity-0"} 
                  ${isListening ? 'bottom-[90px] sm:bottom-0' : 'bottom-0'}
                  right-0 sm:left-0`}>





        <span>{t('commandsAvailable')}</span>
        <button onClick={() => setShowCommands(true)} className="ml-2">
          <FaIcons.FaInfoCircle />
        </button>
      </div>,
      document.body
    )}

    {showCommands && renderCommandsDialog()}
  </div>
);
};

export default VoiceControl;