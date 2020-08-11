# Routing

*  🔖 **Module**
*  🔖 **Routes**
*  🔖 **Child**

Dans une application d'une seule page, vous modifiez ce que voit l'utilisateur en affichant ou en masquant des parties de l'affichage qui correspondent à des composants particuliers, plutôt que d'aller sur le serveur pour obtenir une nouvelle page. Lorsque les utilisateurs exécutent des tâches d'application, ils doivent se déplacer entre les différentes vues que vous avez définies. Pour implémenter ce type de navigation dans la page unique de votre application, vous utilisez le routeur. Le routeur permet la navigation en interprétant une URL de navigateur comme une instruction pour changer la vue.

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/outlet.jpg)

___

## 📑 [Modules](https://angular.io/guide/architecture-modules)

La bonne pratique correspond à fournir un module responsable de définir les routes pour une fonctionnalité. Chaque module déclarant des composant devrait posséder un module de routing si un de ses composant déclaré correspond à une section d'affichage principale.

*src/*
```bash
-app
  |_app-routing.module.ts
```

### 🏷️ **[Generate](https://angular.io/cli/generate#module)**

Un module de routing décrit les routes pour un module représentant une fonctionnalité.

```bash
ng generate module module-name --routing --flat
```

___

👨🏻‍💻 Manipulation

Créer des modules de routing `app` pour vos fonctionnalités.

___

L'option `--flat` ne crée pas de dossier pour le module, si un fichier de module existe déjà même si ce n'est pas un fichier de routing la création échoue. Pour l'instant il n'y a pas de routes et modifiez le fichier généré pour remplacer `forChild` par `forRoot` parce que n'ayant pas de routes parent nous ne pouvons pas définir de routes enfant.

*app-routing.modle.ts*

```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

### 🏷️ **[RouterOutlet](https://angular.io/api/router/RouterOutlet#description)**

Pour afficher le résultat d'un routing il faut utiliser la directive `router-outlet` du `RouterModule`. Le composant routé sera affiché dans cette directive.

*app.component.html*

```html
<router-outlet></router-outlet>
```

___

## 📑 [Routes](https://angular.io/api/router/Route)

### 🏷️ **Déclaration**

Les routes possèdent des attributs pour les configurer dont:

* **path**: Une chaîne d'URL qui utilise la notation de correspondance du routeur. Il peut s'agir d'un caractère générique (**) correspondant à n'importe quelle URL. La valeur par défaut est "/".
* **pathMatch**: La stratégie de correspondance de chemin, l'une parmi 'prefix' ou 'full'. La valeur par défaut est 'préfixe'. Par défaut, le routeur vérifie les éléments d'URL de la gauche pour voir si l'URL correspond à un chemin donné, et s'arrête lorsqu'il y a une correspondance. Par exemple, «/ équipe / 11 / utilisateur» correspond à «équipe /: id».
* **component**: Le composant à instancier lorsque le chemin correspond. Peut être vide si les routes enfants spécifient des composants.
* **redirectTo**: Une URL vers laquelle rediriger lorsque le chemin correspond. Absolu si l'URL commence par une barre oblique (/), sinon par rapport à l'URL du chemin. Lorsqu'il n'est pas présent, le routeur ne redirige pas.
* **children**: Un tableau d'objets Route enfants qui spécifie une configuration d'itinéraire imbriquée.

*routes*

```ts
[
  {
    path: "/foo",
    component: FooComponent,
  },
  {
    path: "/bar:id",
    component: BarComponent,
  },
  {
    path: "**",
    redirectTo: "/foo",
  }
]
```
___

👨🏻‍💻 Manipulation

Créer des routes pour afficher vos composants

___

### 🏷️ **[Links](https://angular.io/api/router/RouterLink)**

Pour établir un lien entre les routes il y a plusieurs notations possible.

```html
<a routerLink="/foo">Foo</a>
```

Le `property binding` permet de s'exprimer en instruction.

```html
<a [routerLink]="['/bar/', 1]">Bar</a>
```

### 🏷️ **[Activated](https://angular.io/guide/router#getting-route-information)**

Pour récupérer l'instance de la route active il existe un service.

```ts
constructor(private route: ActivatedRoute) { }
```

Un paramètre de la route peut être récupéré de différente façon.

```ts
this.route.snapshot.paramMap.get("id")
```

___

## 📑 [Child](https://angular.io/guide/router#nesting-routes)

Chaque module possédant potentiellement son module de routing, parlons organisation des routes déclarées sur plusieurs modules de routing.

```
-app
  |_app-routing.module.ts
  |_app.module.ts
  |_foo
    |_foo-routing.module.ts
    |_foo.module.ts
```

Le cas illustré impose que app module importe son module de routing ainsi que le module encapsulé. L'ordre de déclaration est important, le module encapsulé doit être importé avant le module de routing si ce dernier est responsable de la redirection en cas de wildcard utilisée.

*app.module.ts*

```ts
imports: [
  //...
  FooModule,
  AppRoutingModule,
],
```

Il en va de même pour le modul encapsulé.

*foo.module.ts*

```ts
imports: [
  //...
  FooRoutingModule,
],
```

___

👨🏻‍💻 Manipulation

Encapsulez vos modules pour qu'une fonctionnalité possède des sous fonctionnalités et des `path` distinctes.

___

### 🏷️ **[Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules)**

Si l'encapsulation continue sur le même schéma:

```
-app
  |_app-routing.module.ts
  |_app.module.ts
  |_foo
    |_foo-routing.module.ts
    |_foo.module.ts
    |_bar
      |_bar-routing.module.ts
      |_bar.module.ts
```

La problématique concerne les sous modules, ils sont en fait des enfants du module ou ils sont encapsulés et nous devrions utiliser une déclaration qui correspond a ce status. L'avantage est de pouvoir utiliser un `RouterOutlet` dans le composant parent routé afin de factoriser un affichage commun.

*foo.module.ts*

Reste identique et n'impote pas le module enfant. Il sera chargé par son module de routing comme enfant.

*foo-routing.module.ts*

```ts
[
  {
    path: "foo", redirectTo: "foo/bar"
  },
  {
    path: "foo",
    component: FooComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./bar/bar.module')
          .then((module) => module.BarModule)
      }
    ]
  },
]
```

L'utilisation de `children` spécifie une collection de routes enfants. Il est possible de déclarer des routes en utilisant `component` comme précédemment mais l’inconvénient et le chargement des composants cités. Avec `loadChildren` nous pouvons charger le module auquel est rattaché le module de routing, les composants de ce module peuvent alors s'utiliser dans des contextes différents et le template du composant parent routé peut utiliser une mise en page commune à tous les composants enfants.

*foo.component.ts*

```html
<p>Foo</p>

<router-outlet></router-outlet>
```

Pour que les composants enfant soient routés comme enfants ils doivent utiliser la méthode `forChild` du `RouterModule`.


*bar-routing.module.ts*

```ts
RouterModule.forChild([
  {
    path: "bar",
    component: BarComponent
  }
])
```

___

👨🏻‍💻 Manipulation

Utiliser le lazy-loading et des routes enfants pour les sous fonctionnalités.

___