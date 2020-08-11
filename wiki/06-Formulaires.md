# Formulaires

*  🔖 **FormBuilder**
*  🔖 **Display and events**
*  🔖 **Validation**

___

## 📑 [FormBuilder](https://angular.io/guide/forms-overview)

Un utilitaire de formulaire est pratique pour réunir une définition et utiliser les contraintes et validations.

Il existe plusieurs syntaxes pour construire un formulaire. L'utilisation de `FormBuilder` la simplifie.

### 🏷️ **[FormBuilder](https://angular.io/api/forms/FormBuilder)**

Les prérequis sont l'import des deux modules suivants:

* FormsModule
* ReactiveFormsModule

Le service se déclare dans le constructeur comme tous les injectables.

```ts
  constructor(private fb: FormBuilder) {}
```

#### [FormGroup](https://angular.io/api/forms/FormGroup)

La méthode group renvoie une instance de `FormGroup` qui représente notre formulaire. Un FormGroup possède une collection de [FormControl](https://angular.io/api/forms/FormControl)

```ts
this.myForm = fb.group({
  firstName: ['John', Validators.required]
});
```


#### [Validators](https://angular.io/api/forms/Validators)

Sur cette construction du FormControl, le premier élément du tableau est la valeur de l'élément de formulaire, le second est une contrainte de validation.

___

## 📑 Display and events


### 🏷️ **[Display](https://material.angular.io/components/input/overview)**

Pour afficher notre formulaire nous utiliserons la librairie déjà installée dans les sections précédentes.

Les prérequis sont l'import du module suivant:

* MatInputModule

Le FormGroup et FormControl doivent être présents:

```html
<form [formGroup]="myForm">
    <mat-form-field>
        <mat-label>First Name</mat-label>
        <input matInput formControlName="firstName">
        <mat-error>
            Invalid First Name
        </mat-error>
    </mat-form-field>
</form>
```

La gestion d'erreur en fonction de la contrainte est prise en charge. Regardons comment gérer plusieurs cas d'erreur possible.

```ts
this.form = fb.group({
  firstName: ['', [
    Validators.required,
    Validators.minLength(3)
  ]],
});
```

Le template peut conditionner en utilisant la méthode hasError du FormControl, attention les arguments ne sont pas en camelCase.

```html
<form [formGroup]="myForm">
    <mat-form-field>
        <mat-label>First Name</mat-label>
        <input matInput formControlName="firstName">
        <mat-error *ngIf="myForm.controls.firstName.hasError('minlength')">
            First Name is too short
        </mat-error>
        <mat-error *ngIf="myForm.controls.firstName.hasError('required')">
            First Name is required
        </mat-error>
    </mat-form-field>
</form>
```

### 🏷️ **Events**

#### Submit

Il est  possible  de limiter la mise à jour des FormControl en fonction de types d'évènements, le second paramètre de `group` permet cette limitation.

```ts
{
  updateOn: "submit"
}
```

Pour écouter l'évènement de type submit il y a la directive ngSubmit.

```html
<form [formGroup]="myForm" (ngSubmit)="onSubmit()">
    <!-- ... -->
    <button mat-raised-button color="primary">Submit</button>
</form>
```

#### valueChanges

La valeur d'un FormControl peut notifier une fonction de rappel à chaque changement.

```ts
this.myForm.controls.firstName.valueChanges.subscribe((vaue: string) => {

})
```
___

## 📑 Validation

La validation peut se faire au niveau du FormGroup.

```ts
const isValid = this.myForm.valid
```

La validation peut se faire au niveau du FormControl.

```ts
const isValid = this.myForm.controls.firstName.valid
```

___

👨🏻‍💻 Manipulation

Utiliser la création et validation de formulaire pour créer une instance d'un modèle à partager entre composants.

___
