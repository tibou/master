## Présentation

Cette application a été développée avec ReactJS. Il s'agit d'un client pour l'API Open Banking WSO2.
L'object est d'offrir une application web sécuritée aux utilisateurs pour leurs opérations bancaires.

Cettes application utilise l'authentification Oauth Gmail et Facebook pour authentifier les utilisateurs.

Afin d'assurer un déploiement continu, l'intégration entre Github et Heroku a été utilisée permettant ainsi
de déployer la branche master du projet sur Heroku à chaque modification.

Cliquez sur ce lien [https://obanssi.herokuapp.com](https://obanssi.herokuapp.com) pour accéder à l'application en live.

## Requis

Afin d'exécuter en local l'application, il faut installer sur votre machine la version 10.16.0+

ReactJS 16.13.1

NodeJS 10.16.0

## Déploiement et commandes

### `yarn start`

Une fois vous avez clonez directement le projet ou en passant par le fork, positionnez-vous dans
le répertoire projet puis lancez la commande `yarn start`

Cette commande lance l'application en mode développement.<br />
Ouvrez dans le navigateur [http://localhost:3000](http://localhost:3000) pour accéder.

A chaque changement que vous faites, la page est rechargée automatiquement.<br />

### `yarn test`

La commande `yarn test` lance les différents tests unitaires et d'intégrations.<br />

### `yarn build`

La commande `yarn build` permet de compiler l'application dans le répertoire `build`
pour la mise en production. <br />
It correctly bundles React in production mode and optimizes the build for the best performance.

Pour avoir plus d'informations sur la mise en production, cliquez ceci https://facebook.github.io/create-react-app/docs/deployment.
