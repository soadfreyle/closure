const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        }
    }
};
//no podemos cambiar ni reasignar el 
//valor de saveName sin estos metodos
newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Oscar');
console.log(newPerson.getName());