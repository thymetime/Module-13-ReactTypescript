import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';

const CandidateSearch = () => {

  let [candidateArray, setCandidateArray] = useState([])
  let [loading, setLoading] = useState(true)

  const loadCandidates = async () => {
    const data = await searchGithub()
    console.log("Data:", data)
    if (data) {
      setCandidateArray(data)
      console.log("Candidate array:", candidateArray)
      setLoading(false)
    }

  }

  useEffect(() => {
    loadCandidates()
    // console.log("Candidate array:", candidateArray)
  }, [loading]

  )





  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
