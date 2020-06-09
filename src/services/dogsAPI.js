export const fetchList = () => {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json=> json.message)
    .then(json=> Object.keys(json));
};

export const fetchDetail = (breed) => {
  return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res.json())
    .then(json => (json.message));
};
