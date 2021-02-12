# HTTP

*  🔖 **Request**
*  🔖 **Response**

___

## 📑 Request

La formulation est hautement simplifiée et normalisée grâce au HttpClient.

### 🏷️ **[HttpClient](https://angular.io/api/common/http/HttpClient)**

Le prérequis pour l'envoie d'une requête est l'import du module suivant: 

* HttpClientModule

Le service se déclare dans le constructeur comme tous les injectables.

```ts
constructor(private http: HttpClient) { }
```

### 🏷️ **[Headers](https://angular.io/api/common/http/HttpHeaders)**

Les entêtes sont spécifiés dans un objet non typé décrivant les options.

```ts
const options = {
  headers: new HttpHeaders({
    "Content-Type": "application/json
  })
}
```

### 🏷️ **Fetch**

Le client possède la méthode get pour récupérer de la donnée. Il est possible de typer la valeur renvoyé par l'observable.

[HttpClient.get](https://angular.io/api/common/http/HttpClient#get)

```ts
this.http.get<MyModel>(url, options).subscribe(
  (data: MyModel) => {
    console.log(data)
  },
  (error: HttpErrorResponse) => {
    console.log(error)
  }
);
```

### 🏷️ **Write**

Le client possède les méthodes `post`, `put`, `delete` pour modifier la donnée.

```ts
this.http.put<MyModel>(url, body, options);
```

___

## 📑 Response

Les méthodes du HTTPClient renvoient un Observable.

```ts
this.http.get<MyModel>(url, options).subscribe(
  (data: MyModel) => {
    console.log(data)
  },
  (error: HttpErrorResponse) => {
    console.log(error)
  }
);
```

Une souscription attend en argument premier un callback pour le succès et fourni le corps de la réponse. En argument second un callback en cas d'erreur typé à HttpErrorResponse.

### 🏷️ **[Pipe](https://angular.io/guide/rx-library#operators)**

Utile pour exécuter des instructions avant que les fonctions passées à subscribe ne soient invoquées, cette méthode prend en argument des opérateurs:

L'opérateur tap par exemple est utile pour exécuter des instructions sans modifier la donnée passée à la subscription.

```ts
this.http.get(url).pipe(
  tap(data) => {
    console.log("Je suis dans tap");
  }
);

```

D'autres opérateurs sont disponibles comme map, filter, catchError...

___

👨🏻‍💻 Manipulation

Stockez vos données en ligne avec un service de stockage au format json et utilisez le HTTPClient et les services pour la piloter.