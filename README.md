# Closure 🐘



[![cerebro](https://media.istockphoto.com/id/1312349282/es/foto/aprendizaje-autom%C3%A1tico-inteligencia-artificial-y-concepto-de-aprendizaje-profundo.jpg?b=1&s=612x612&w=0&k=20&c=54L7_12ZZsDmLs08pXxLzt5SrobMI-FRCW0pNtD-S3k= "cerebro")](https://www.istockphoto.com/photo/machine-learning-artificial-intelligence-and-deep-learning-concept-gm1312349282-401188461?utm_campaign=srp_photos_limitedresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Fbuscar%2Fneurons%2F&utm_medium=affiliate&utm_source=pexels&utm_term=neurons "cerebro")

> > Un closure permite acceder al scope de una función exterior desde una función interior. En JavaScript, los closures se crean cada vez que una función se genera. A diferencia de otros conceptos como funciones, variables u otros, los closures no se utilizan todas las veces.

## Contruccion
**Para construir un closure necesitaremos los siguientes requisitos:**
- Una función dentro de otra función.

```javascript
function padre() {

    function hijo() {
    
    }
    
}
```

- Una variable que se encuentre en la función con el scope superior, donde la función con scope inferior la utilice.

```javascript
function padre() {
    let numero = 5;
	
    function hijo() {
        numero = numero + 1;
        return numero;
    }
	
}
```
- Invocar la función con scope inferior en otro scope del que fue escrita. Esto lo podemos hacer retornando la función entera y asignar la función de scope superior a una variable.

```javascript
function padre() {
    let numero = 5;
    function hijo() {
        numero = numero + 1;
        console.log(`MoneyHijo: $${numero}`);
        return numero;
    }
    return hijo;
}
let closure = padre();
closure();
closure();
closure();
```

*De esta manera, obtendremos una función (scope inferior) que tiene una referencia a la variable que se encontraba en un scope superior, que a su vez recordará el contexto donde fue generada.*

*El Closure recuerda el valor del llamado anterior de una funcion.*

