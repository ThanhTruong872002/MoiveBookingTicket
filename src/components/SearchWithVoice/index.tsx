import React, { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { VoiceSearchIcon } from '../Common/Icons'

interface SearchWithVoiceProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const SearchWithVoice: React.FC<SearchWithVoiceProps> = ({ setSearchValue }) => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  const handleVoiceSearchClick = () => {
    if (listening) {
      SpeechRecognition.stopListening()
    } else {
      SpeechRecognition.startListening()
    }
    const cleanedTranscript = transcript.replace(/\.$/, '')
    setSearchValue(cleanedTranscript)
    resetTranscript()
  }

  return (
    <div onClick={handleVoiceSearchClick} className='text-white cursor-pointer '>
      <VoiceSearchIcon />
    </div>
  )
}

export default SearchWithVoice
