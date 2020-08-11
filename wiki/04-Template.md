# Template

*  🔖 **Interpolation**
*  🔖 **Binding**
*  🔖 **Variables**
*  🔖 **Directives**
*  🔖 **Pipes**

La syntaxe des template nous permet d'atteindre nos objectifs fonctionnels. Dans un template, les attributs et méthodes du composant sont disponibles.

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/template.jpg)

___

## 📑 [Interpolation](https://angular.io/guide/interpolation)

L'interpolation fait référence à l'incorporation d'expressions dans du texte balisé. Par défaut, l'interpolation utilise comme délimiteur les doubles accolades.

*component*

```ts
public title = 'project-name';
```

*template*

```ts
{{title}}
```

Un attribut autre qe `public` n'est pas visible dans les templates.

___

## 📑 [Binding](https://angular.io/guide/interpolation)

La liaison de données est un mécanisme permettant de coordonner ce que les utilisateurs voient, en particulier avec les valeurs de données d'application.

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/binding.jpg)

### 🏷️ **[Property Binding](https://angular.io/guide/property-binding)**

La liaison de propriété fait circuler une valeur dans une direction, de la propriété d'un composant vers une propriété d'élément cible.

```bash
<a [title]="title" href="/">Home</a>
```
#### [Attributs, style and class](https://angular.io/guide/attribute-binding)

Les attributs sans valeur seront présents s'ils sont acceptés sémantiquement et si la valeur associée renvoie une valeur assimilable à true.

```bash
<button [disabled]="true">Home</button>
```

Il est possble d'affecter à une propriété d'un attribut une valeur.

```bash
<button [style.color]="'red'">Home</button>
```
 Il est possible d'ajouter un élément à une collection en utilisant les booleans.

```bash
<button [class.foo]="true">Home</button>
```

### 🏷️ **[Event Binding](https://angular.io/guide/property-binding)**

Le template possède les méthodes du composant, le binding évènementiel propose de relier un attribut évènementiel de l'élément à une méthode du composant.

*template*

```html
<button (click)="onSave()">Save</button>
```

*composant*

```ts
onSave() { }
```

#### Event

Pour récupérer l'évènement émit il faut utiliser la variable `$event`, le nommage de cette variable n'est pas libre.

*template*

```html
<button (click)="onSave($event)">Save</button>
```

*composant*

```ts
onSave(event: MouseEvent) { }
```

___

## 📑 [Variables](https://angular.io/guide/template-reference-variables)

Une variable de référence de modèle est souvent une référence à un élément DOM dans un template.

```html
<input #myInput />
<button (click)="onSave(myInput.value)">Value</button>
```

___

## 📑 [Structural Directive](https://angular.io/guide/built-in-directives)

Les directives structurelles sont responsables de la mise en page HTML. Ils façonnent ou remodèlent la structure du DOM, généralement en ajoutant, supprimant et manipulant les éléments hôtes auxquels ils sont attachés.

### 🏷️ **[*ngIf](https://angular.io/guide/built-in-directives#ngif)**

Vous pouvez ajouter ou supprimer un élément du DOM en appliquant une directive NgIf à un élément hôte.

```html
<h1 *ngIf="title">
  {{title}}
</h1>
```

#### ng-container

Un container sans balisage structurel est disponible: ng-container.

```html
<ng-container *ngIf="title">
    <h1>{{title}}</h1>
</ng-container>
```

#### ng-tempalte

Les templates peuvent être stockés dans des `ng-template`. Pratique pour conditionner un affichage.

```html
<div *ngIf="title else myTemplate">
  <h1>{{title}}</h1>
</div>

<ng-template #myTemplate>
    <strong>No title</strong>
</ng-template>
```

### 🏷️ **[*ngFor](https://angular.io/guide/built-in-directives#ngfor)**

NgFor est une directive répéteur - un moyen de présenter une liste d'éléments. Vous définissez un bloc de HTML qui définit la façon dont un élément unique doit être affiché, puis vous indiquez à Angular d'utiliser ce bloc comme modèle pour le rendu de chaque élément de la liste.

```html
<div *ngFor="let item of items">
  {{item.name}}
</div>
```

#### Index

L'expression suivant donne l'index de chaqué élément.

```html
<div *ngFor="let item of items; let i=index">
  {{i + 1}} - {{item.name}}
</div>
```

### 🏷️ **[ngSwitch](https://angular.io/guide/built-in-directives#the-ngswitch-directives)**

NgSwitch est comme l'instruction de commutation JavaScript. Il affiche un élément parmi plusieurs éléments possibles, en fonction d'une condition de commutation. Angular place uniquement l'élément sélectionné dans le DOM.

```html
<div [ngSwitch]="title">
  <p *ngSwitchCase="'foo'">
    Meta Variable
  </p>
  <p *ngSwitchDefault>
    {{ title }}
  </p>
```

___

## 📑 [Pipes](https://angular.io/guide/pipes)

Utilisez des pipes pour transformer des chaînes, des montants en devises, des dates et d'autres données à afficher. Les pipes sont des fonctions simples que vous pouvez utiliser dans les templates pour accepter une valeur d'entrée et renvoyer une valeur transformée.

```html
{{ birthday | uppercase}}
```

Il existe assez peu de pipes et il est évidement possible d'en créer.

___

👨🏻‍💻 Manipulation

Utiliser la syntaxe des templates pour formater votre donnée, et permettre sa modification avec les interactions utilisateur.

___
