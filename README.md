# YAPO_HEROES

## PRE-REQUISITOS
- Git
- Docker
- Node JS
- WIndows 10
## INSTALACION
1. Crear carpeta local que contendrá la aplicacion (Ej: C:\ACM_TEST)
2. Dentro de ACM_TEST abrir consola de comandos y ejecutar : 
```sh
C:\ACM_TEST> git clone https://github.com/FIXDISC/yapo_heroes.git
```
3. Acceder a la carpeta del proyecto yapo_heroes :
```sh
cd C:\ACM_TEST\yapo_heroes\
```
4. Generar el contenedor :
```sh
C:\ACM_TEST\yapo_api> docker build -t yapo_heroes .
```
5. Desplegar la imagen con el proyecto:
```sh
docker run -it -p 5000:5000 yapo_heroes
```
6. Navegar en el browser a la direccion:  
   http://localhost:5000
7. Al ingresa texto debe desplegar listado de coincidencias:  
![CAPTURA](https://github.com/FIXDISC/yapo_heroes/tree/main/test.PNG)
   

## TESTING
Generar pruebas desde la linea de comandos :
```sh
C:\ACM_TEST\yapo_api> npm test
```
![TEST](https://github.com/FIXDISC/yapo_heroes/tree/main/CAPTURA.PNG)
