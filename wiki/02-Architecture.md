# Architecture

*  🔖 **Les modules**
*  🔖 **Les composants**
*  🔖 **Les templates**
*  🔖 **Les services**

> L'architecture d'une application Angular repose sur certains concepts fondamentaux.

___

## 📑 [Les modules](https://angular.io/guide/architecture-modules)

> Angular possède son propre système de modularité appelé NgModules.

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/architecture.jpg)

Les NgModules sont des conteneurs pour un bloc cohésif de code dédié à un domaine d'application, un flux de travail ou un ensemble de fonctionnalités étroitement liées. Ils peuvent contenir des composants, des fournisseurs de services et d'autres fichiers de code dont la portée est définie par le NgModule. Ils peuvent importer des fonctionnalités exportées à partir d'autres NgModules et exporter des fonctionnalités sélectionnées pour les utiliser par d'autres NgModules.

Chaque application Angular a au moins une classe NgModule, le module racine, qui s'appelle conventionnellement `AppModule` et réside dans un fichier nommé app.module.ts. Vous lancez votre application en amorçant le NgModule racine.

* src/

```bash
-app
  |_app.module.ts
```

### 🏷️ **[Generate](https://angular.io/cli/generate#module)**

Un module est donc un ensemble de fonctionnalité sous thématique commune.

```bash
ng generate module module-name
```

___

👨🏻‍💻 Manipulation

Résumez vos fonctionnalités par un nom et générez les modules en rapport avec votre réflexion.

___

### 🏷️ **[Metadata](https://angular.io/guide/architecture-modules#ngmodule-metadata)**

Un NgModule est défini par une classe décorée avec @NgModule (). Le décorateur @NgModule () est une fonction qui prend un seul objet de métadonnées, dont les propriétés décrivent le module.

* déclarations: Les composants, directives et tuyaux appartenant à ce NgModule.

* exports: Le sous-ensemble de déclarations qui doit être visible et utilisable dans les composants d'autres NgModules.

* imports: D'autres modules dont les classes exportées sont nécessaires aux composants déclarés dans ce NgModule.

___

👨🏻‍💻 Manipulation

Utilisez les `metadata` pour que vos modules utilisent le module partagé. Le module partagé rend disponible le module material. Le module material rend disponible le module button de la librairie installé.

```bash
-app
  |_app.module.ts
  |_shared
    |_shared.module.ts
    |_material
      |_material.module.ts
```

[Button](https://material.angular.io/components/button/api)

___

### 🏷️ **[Components](https://angular.io/guide/architecture-modules#ngmodules-and-components)**

Les NgModules fournissent un contexte de compilation pour leurs composants. Un NgModule racine a toujours un composant racine qui est créé pendant le bootstrap, mais tout NgModule peut inclure n'importe quel nombre de composants supplémentaires, qui peuvent être chargés via le routeur ou créés via le composant racine.

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/compilation-context.png)

Un composant et son gabarit définissent ensemble une vue. Un composant peut contenir une hiérarchie de vues, qui vous permet de définir des zones arbitrairement complexes de l'écran qui peuvent être créées, modifiées et détruites en tant qu'unité. Une hiérarchie de vues peut mélanger des vues définies dans des composants appartenant à différents NgModules. C'est souvent le cas, en particulier pour les bibliothèques d'interface utilisateur.

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/view-hierarchy.png)

___

## 📑 [Les composants](https://angular.io/guide/architecture-components)

Vous définissez la logique d'application d'un composant - ce qu'il fait pour prendre en charge la vue - à l'intérieur d'une classe. La classe interagit avec la vue via une API de propriétés et de méthodes.

* src/

```bash
-app
  |_app.component.ts
```

### 🏷️ **[Generate](https://angular.io/cli/generate#component)**

Un composant est donc une vue rattachée à un module avec la metadata `declare` et pouvant être utilisée par d'autres components du même ou de différents modules à condition qu'il soit exporté par le module où il est déclaré avec la metadata `exports`.

```bash
ng generate component component-name
```

___

👨🏻‍💻 Manipulation

Générez vos différents composants et rattachez les au module correspondant, choisissez leur visibilité pour d'autres modules.

___

### 🏷️ **[Metadata](https://angular.io/guide/architecture-components#component-metadata)**

Les métadonnées d'un composant indiquent à Angular où obtenir les principaux blocs de construction dont il a besoin pour créer et présenter le composant et sa vue. En particulier, il associe un template au composant, soit directement avec du code en ligne, soit par référence. Ensemble, le composant et son template décrivent une vue.

* selector: Un sélecteur CSS qui indique à Angular de créer et d'insérer une instance de ce composant partout où il trouve la balise correspondante dans le template HTML.

* templateUrl: L'adresse relative au module du template HTML de ce composant. Vous pouvez également fournir le template HTML en ligne, comme valeur de la propriété du template.

* styleUrls: L'adresse relative au module du fichier de style.

* providers: Une gamme de fournisseurs pour les services requis par le composant.

___

## 📑 [Les templates](https://angular.io/guide/architecture-components#templates-and-views)

Les vues sont généralement organisées de manière hiérarchique, vous permettant de modifier ou d'afficher et de masquer des sections ou des pages entières de l'interface utilisateur en tant qu'unité. Le template immédiatement associé à un composant définit la vue hôte de ce composant. Le composant peut également définir une hiérarchie de vues, qui contient des vues incorporées, hébergées par d'autres composants.

### 🏷️ **Encapsulation**

Les templates peuvent afficher les templates d'autres composants en utilisant le selector du composant à condition que le composant soit visible dans le modules appartenant le template. Pour être affiché, la balise d'un composant doit être affiché.

* index.html

```html
<app-root></app-root>
```

* app.component.ts

```ts
@Component({
  selector: 'app-root',
  //
})
```

App est le composant racine, il est le point d'entré de l'affichage. Pour afficher un composant généré il faut utiliser son selector dans le template d'un composant à condition qu'il soit dans le même module ou exporté.

* app.component.html

```html
<app-foo></app-foo>
```

#### Prefix

Le préfixe des composants générés est spécifié dans le fichier `angular.json`.

```json
"projects": {
  //
    "prefix": "app",
```

___

👨🏻‍💻 Manipulation

Affichez uUn composant généré dans `app.component.html` et le composant `button` dans le composant généré 

___

## 📑 [Les services](https://angular.io/guide/architecture-services)

Le service est une vaste catégorie englobant toute valeur, fonction ou fonctionnalité dont une application a besoin. Un service est généralement une classe avec un objectif étroit et bien défini. Il doit faire quelque chose de spécifique et bien le faire.

Angular distingue les composants des services pour augmenter la modularité et la ré-utilisabilité. En séparant les fonctionnalités liées à la vue d'un composant des autres types de traitement, vous pouvez rendre vos classes de composants allégées et efficaces.

Un composant peut déléguer certaines tâches à des services, telles que la récupération de données à partir du serveur, la validation de l'entrée utilisateur ou la journalisation directement dans la console. En définissant ces tâches de traitement dans une classe de service injectable, vous mettez ces tâches à la disposition de n'importe quel composant. Vous pouvez également rendre votre application plus adaptable en injectant différents fournisseurs du même type de service, le cas échéant dans différentes circonstances.

### 🏷️ **[Generate](https://angular.io/cli/generate#service)**

Angular style guide nous invite a générée nos services dans un dossier partagé ou directement à la racine du dossier du component s'il n'est pas utilisé ailleurs

[Angular style guide](https://angular.io/guide/styleguide#t-dry-try-to-be-dry)

```bash
-shared
  |_services
    |_foo.service.ts
-bar
  |_bar.service.ts
```

```bash
ng generate service service-name
```

### 🏷️ **[Usage](https://angular.io/guide/architecture-services#service-examples)**

Le service étant un injectable, le Framework maîtrise le cycle de vie de l'instance du service et l'injecte dans le constructeur du service ou du composant le éclarant en argument entrant.

```ts
export class FooComponent {

  constructor(private foo: FooService) { }

  onSomething() {
    this.foo.doSomething();
  }

}
```
___

👨🏻‍💻 Manipulation

Générez vos différents services en rapport avec la donnée dont vous avez besoin et les opérations la concernant.

___

### 🏷️ **Models**

Bien que suggéré dans le Angular style guide, le Framework ne parle pas de cette couche. Pour utiliser pleinement le typage il est conseillé d'avoir une couche model sur la même structure que la couche service.

```bash
-shared
  |models
    |_foo.model.ts
-bar
  |_bar.model.ts
```

```bash
ng generate class model-name
```

___

👨🏻‍💻 Manipulation

Générez vos différents models et utilisez les dans la couche service pour initialiser des attributs pertinents.