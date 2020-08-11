# Communication

*  🔖 **Input**
*  🔖 **Output**
*  🔖 **Service**

Pour partager des données ou prendre en compte des modifications, les composants peuvent utiliser les concepts que nous allons aborder.

___

## 📑 [Input](https://angular.io/guide/component-interaction#pass-data-from-parent-to-child-with-input-binding)

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/input-output.jpg)

@Input est utile pour transmettre de l'information d'un composant parent à un composant enfant.

*parent component*

```ts
public title = 'project-name';
```

*parent template*

```ts
<child-component [title]="title"></child-component>
```

L'idée est de transmettre une valeur à un composant enfant par le template en utilisant le `property binding`. Quand la valeur présente sans le composant parent, celle du composant enfant change également. Par contre quand elle évolue dans le composant enfant, cela n'affecte pas celle du parent.

*child component*

```ts
@Input() title: string;
```

### 🏷️ **[Intercepter les changements](https://angular.io/guide/component-interaction#intercept-input-property-changes-with-ngonchanges)**

Le hook `ngOnChanges` est invoqué quand une valeur entrante est réaffectée.

*child component*

```ts
export class ChildComponent implements OnChanges {

  @Input() title: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
```

___

## 📑 [Output](https://angular.io/guide/component-interaction#parent-listens-for-child-event)

Un output est une donnée sortante qui utilise le concept évènementiel: un composant enfant peut emmètre un évènement dont le type est spécifié en @Output. Un composant parent peut alors être notifié d'un changement en écoutant l'émission de cet évènement.

*child component*

```ts
export class ChildComponent implements OnChanges {

  @Input() title: string;

  @Output() onTitle: EventEmitter<string> = new EventEmitter<string>();

}
```

*child template*

```html
<button (click)="onTitle.emit('Hello World')">
  helloWorld
</button>
```

Le composant enfant peut emmètre un évènement `onTitle`. Un composant parent peut écouter cet évènement.

*parent template*

```html
<child-component [title]="title"
(onTitle)="title = $event"></child-componentr>
```

___

## 📑 [Service](https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service)

![image](https://raw.githubusercontent.com/seeren-training/Angular/master/wiki/resources/service.jpg)

Les services dont les instances sont maîtrisées partagent de la donnée entre plusieurs composants.

*service*

```ts
export class TitleService {

  private title: string = "Hello World";

  get() {
    return this.title;
  }

  set(title: string) {
    this.title = title;
  }

}
```

*components*

```ts
constructor(public title: TitleService) { }
```

*templates*

```
{{title.get()}}
```

Ce rapport utilisé avec des références peut permettre à un composant A de modifier de la données également référencée dans un composant B le mettant à jour.

### 🏷️ **[Observable](https://angular.io/guide/component-interaction#intercept-input-property-changes-with-ngonchanges)**

Un service utilise le pattern Observer pour pouvoir notifier aux fonctions attachées qu'un changement à eu lieu. Un type particulier existe pour que l'on puisse souscrire à une action en cas de changement.

Subject est un type observable assez particulier car il possède des méthodes qui le rende proche des EventEmmiter. Sa méthode `next` appelle toute les méthodes attachées à son observation.

*service*

```ts
export class TitleService {

  private value: string;

  public subject: Subject<string> = new Subject<string>();

  constructor() {
    this.setTitle("Hello World");
  }

  getTitle(): string {
    return this.value;
  }

  setTitle(title: string) {
    this.subject.next(this.value = title);
  }

}
```

*composant*

```ts
titleService.subject.subscribe((value: string) => {
  console.log(value);
});
```

A chaque fois que le sujet invoque sa méthode `next`, les fonctions passées à `subscribe` seront invoquées.

Le sujet est un observable, mais ce n'est pas une bonne pratique de l'exposer publiquement, il est préférable de fournir un type Observable qui ne peut pas émettre de valeur.

*service*

```ts
private subject: Subject<string> = new Subject<string>();

public observable: Observable<string> = this.subject.asObservable();  
```
*composant*

```ts
titleService.observable.subscribe((value: string) => {
  console.log(value);
});
```

___

👨🏻‍💻 Manipulation

Utiliser la communication entre composants pour modifier vos données dans un composant et que les autres prennent en compte ces changements.

___
