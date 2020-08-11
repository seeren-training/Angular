# Introduction

*  🔖 **Le Framework**
*  🔖 **TypeScript**
*  🔖 **Components**
*  🔖 **Start**

___

## 📑 Le Framework

### 🏷️ **[Angular](https://angular.io/)**


Angular est un **framework côté client**, open source, basé sur TypeScript, et co-dirigé par l'équipe du projet « Angular » à Google et par une communauté de particuliers et de sociétés. Angular est une réécriture complète de AngularJS, framework construit par la même équipe.

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/angular.png)

### 🏷️ **[Features](https://angular.io/features)**

* Cross Platform
* Speed and Performance
* Productivity
* Full Development Story

### 🏷️ **[Releases](https://angular.io/guide/releases)**

Le cycle des releases est de 6 mois, nous en sommes à la version 10.

|Version|Status|Released|Active Ends|LTS Ends|
|---|---|---|---|---|
|^10.0.0|Active|Jun 24, 2020|Dec 24, 2020|Dec 24, 2021|
^9.0.0|Active|Feb 06, 2020|Aug 06, 2020|Aug 06, 2021|
|^8.0.0|LTS|May 28, 2019|Nov 28, 2019|Nov 28, 2020|

___

## 📑 [TypeScript](https://www.npmjs.com/)

La connaissance de TypeScript est **utile, mais pas obligatoire**.

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/typescript.png)

### 🏷️ **[Syntaxe](https://www.typescriptlang.org/docs)**

Le niveau de visibilité et les types sont autorisés, la déclaration d'attributs également.

```ts
class Foo {

  private bar: string;

  constructor(bar: string) {
    this.bar = bar;
  }

  public getBar(): string {
    return this.bar
  }

}
```

La déclaration d'attributs peut se faire en utilisant un niveau de visibilité dans la liste des arguments du constructeur

```ts
class Foo {

  constructor(private bar: string) {}

}
```
___

## 📑 Components

Angular se base sur le standard des **web components**.

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/webcomponent.png)

### 🏷️ **[Specification](https://developer.mozilla.org/fr/docs/Web/Web_Components)**

Les composants Web ont pour but de résoudre le problème de réutilisation de code et consistent en 3 technologies qui peuvent être utilisées ensemble pour créer des éléments réutilisables, encapsulés, versatiles et sans risquer une collision avec d'autre morceaux de code. Un web component possède:

* **[Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)**: pour créer et enregistrer de nouveaux éléments HTML et les faire reconnaître par le navigateur.
* **[HTML Templates](https://developer.mozilla.org/fr/docs/Web/HTML/Element/template)**: squelette pour créer des éléments HTML instanciables.
* **[Shadow DOM](https://developer.mozilla.org/fr/docs/Web/Web_Components/Using_shadow_DOM)**: permet d'encapsuler le JavaScript et le CSS des éléments.

___

## 📑 Installation

### 🏷️ **Prérequis**

* [NodeJS](https://nodejs.org/en/download/)
* [VSCode](https://code.visualstudio.com/)

### 🏷️ **[Getting Started](https://angular.io/guide/setup-local)**

La mise en route est bien documentée mais ce guide propose de la compléter

#### Install @angular/cli

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/angular-cli.png)

```bash
npm install @angular/cli
```

#### [Create a project]((https://angular.io/cli/new))

```bash
npx ng new my-project --style scss
```

Modifiez le current directory

```bash
cd my-project
```

#### Serve the project

```bash
npm run start
```

___

👨🏻‍💻 Manipulation

Installer angular et démarrer le server.

___

### 🏷️ **Additionnal**

#### [Material Design Components](https://material.angular.io/)

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/angular-material.png)

##### Install @angular/material

```bash
npx ng add @angular/material
```

##### Fix dependencies

Vous pouvez observer que les icônes et la typographies sont liées à l'index.html avec un ien distant.

*index.html*

```html
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Par commodité et pour pouvoir exécuter le projet sans connexion, il est possible de les déclarer comme dépendances et de les lier au projet autrement.

##### Install @angular/material

```bash
npm install roboto-fontface material-design-icons --save
```

##### Link dependencies

Enlever les liens distants de l'`index.html` et éditer le fichier `angular.json`.

*angular.json*

```json
"styles": [
  //...
  "./node_modules/roboto-fontface/css/roboto/roboto-fontface.css",
  "./node_modules/material-design-icons/iconfont/material-icons.css",
```

#### [Flex Layout](https://github.com/angular/flex-layout)

##### Install @angular/flex-layout

```bash
npm install @angular/flex-layout --save
```

___

👨🏻‍💻 Manipulation

Installer les deux librairies d'affichages citées.

___