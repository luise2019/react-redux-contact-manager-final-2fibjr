// Action Creator
export function addPerson(person,number) {
    return {
        type: 'ADD_PERSON',
        data: {name:person, number:number}
    }
}

