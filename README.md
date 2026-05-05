# Simulador de Memoria RAM - Partición Dinámica

Es un simulador que muestra cómo se administra la memoria RAM cuando usamos "Partición Dinámica".

### ¿Cómo funciona?
- **Carga de procesos:** Metes el tamaño en KB y el programa busca el primer hueco donde entre (usando First-Fit). 
- **División automática:** Cuando el proceso entra en un bloque grande, el programa lo "corta" y deja el espacio que sobra como un bloque libre nuevo.
- **Liberar memoria:** Si haces clic en un proceso (los bloques rojos), se borra y vuelve a quedar verde.
- **Unión de bloques:** Si quedan dos espacios libres juntos, el código los une automáticamente para que no queden pedacitos sueltos por ahí.

### ¿Qué usé para hacerlo?
- **HTML y CSS:** Para que la barra de memoria se vea bien y sea fácil de entender.
- **JavaScript:** Acá está toda la lógica de las restas, el bucle para buscar espacio y la función para unir los bloques.

### Nota:
Para armar la lógica de cómo se cortan y se unen los bloques de memoria, usé funciones de JS como `.splice()` y arreglos de objetos para que todo sea dinámico y no estático.