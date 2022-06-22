import axios from 'axios';

export function getAllArtefacts (setArtefacts) {
    axios.get('http://127.0.0.1:8080/artefact')
    .then(res => {
      const artefacts = res.data;
      setArtefacts(artefacts);
    }).catch((err) => console.log(err));
}

