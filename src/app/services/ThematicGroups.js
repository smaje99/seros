const API = process.env.API;

const getURLThematicGroup = name => `${API}/thematicGroups/${name}`;

export const getThematicGroup = async name => {
    const res = await fetch(getURLThematicGroup(name));
    const data = await res.json();
    return data;
}