# Guard

*  🔖 **Guard**
*  🔖 **Authorization**

___

## 📑 [Guard](https://angular.io/guide/router#preventing-unauthorized-access)

Utilisez des gardes de route pour empêcher les utilisateurs d'accéder à des parties d'une application sans autorisation.

```bash
ng generate guard my-user
```

```ts
@Injectable({
  providedIn: 'root'
})
export class MyUserGuard implements CanActivate {

  constructor(privaye MyAuthService myAuthService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return myAuthService.isLogged();
  }
  
}
```

Les guards ne constituent pas un mécanisme de sécurité, uniquement un blo logique pour permettre l'activation d'une route.

___

## 📑 Authorization

Pour créer un compte et fournir une authorization à votre client, vous devez choisir une techno back-end et vous intéresser aux différents protocols autorisation, Basic, JWT puis OAuth.

___

👨🏻‍💻 Manipulation

Partez à sur la création d'une API pour compléter la gestion des utilisateurs de votre Front.