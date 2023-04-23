# Section 1: [TEST UNITAIRE](/)

##### Le test unitaire permet de tester une partie spécifique de votre application (généralement une fonction). - Il permet d’éviter les effets de bord : pour un paramètre donné, le résultat sera toujours le même. - Les tests permettent à la fois de fiabiliser les applications et de décomplexifier la base de code. Une fonction difficilement testable est souvent une fonction qui doit être refactorisée pour pouvoir être mieux testée. - Essayez toujours de commencer par réaliser des tests sur les parties les plus complexes et les plus critiques de votre application. Ce sont ces dernières qui auront souvent le plus de chance de casser.- Attention au “Et si” lors de la phase de rédaction de votre test. Il est important que vous sachiez à quoi vous intéresser lors de la rédaction de votre test.

#### Dans ce type de cas, nous serions plutôt dans un test E2E. En effet, un test E2E va répliquer un parcours complet : nous allons parcourir plusieurs pages et regarder si tout fonctionne correctement. Un test d’intégration, lui, ne teste qu’une fonctionnalité d’une page.

##### Cette différence peut être parfois un peu légère, mais avec l’expérience et les exemples que nous allons voir ensemble, ça devrait être beaucoup plus clair.

##### Décomposons ensemble ce bloc de code : Dans un premier temps, j’importe le code du fichier js/common/pagination/index.js . - describe vous permet de créer un bloc de tests (ou “Test Suite”, en anglais). Ce n’est pas un élément obligatoire, mais cela permet de renseigner le type de test que vous réalisez. - it contient le message indiquant le résultat attendu. On écrit souvent les tests sous la forme : it(‘should ...’). Par exemple, it(‘should return something’) ou en français, “ça devrait retourner quelque chose”. Il est important ici de faire un message le plus synthétique et complet possible. - expect() va vous permettre d'exécuter la fonction et de stocker la valeur de retour de cette dernière. - toBeDefined() ou toEqual() est le test en lui-même. C’est ce qu’on appelle le “matcher” côté test. Autrement dit, Jest va tester si le résultat de expect() correspond au “matcher”.

## RESUME

### - Jest est LE framework de test JavaScript : il permet de facilement créer des tests unitaires avec une configuration proche de zéro. - Vos tests doivent être dans un fichier comportant le mot test . - La bonne pratique consiste à les nommer nomDeMonFichierTesté.test.js . - Un test doit comporter it (qui correspond au point d’entrée du test), et expect , ainsi que la valeur de retour testée.

# Section 2: [TEST D'INTÉGRATIONS](https://openclassrooms.com/fr/courses/7159306-testez-vos-applications-front-end-avec-javascript/7332803-adoptez-la-methodologie-des-tests-d-integration)

##### Tout d’abord, vous devez savoir que les tests d’intégration arrivent souvent après les tests unitaires. En effet, ils sont un peu plus complexes à réaliser, et vous aurez souvent besoin de librairies complémentaires pour les mettre en place. De plus, alors que les tests unitaires visent à tester des portions très précises de votre code, les tests d’intégration testent l’ensemble d’une fonctionnalité.

###### Une fonctionnalité, c’est une partie de votre application. C’est le formulaire qui va vous permettre d’ajouter ou d’éditer un capteur, c’est la galerie d’images pour les capteurs, c’est le système de routage, etc

##### Comme pour les tests unitaires, il est important que vous ajoutiez vos tests d’intégration aux endroits les plus critiques de votre application. Et comme pour les tests unitaires, il est important de prendre du recul sur votre projet. Cela dit, à la différence des tests unitaires, essayez d’analyser votre projet dans son ensemble, plus que votre code, dans un premier lieu.Quelles sont les fonctionnalités critiques de votre application ? Ici, on ne parle pas forcément des plus simples ou des plus complexes, mais juste des fonctionnalités, qui, si elles cassent, ne vous permettent plus d’utiliser votre site correctement.

##### À la différence des tests unitaires, les tests d’intégration ont une portée (ou scope, en anglais) un peu plus grande. Ils testent l’ensemble d’une fonctionnalité. - Avant de vous lancer dans la rédaction des tests, analysez et réfléchissez aux parties les plus critiques de votre application. Quand pourriez-vous les tester efficacement ? - N’hésitez pas à vous faire aider soit d’un autre développeur, soit de quelqu’un d’extérieur, quelqu’un du produit par exemple, pour voir quelles parties tester. - Vous savez maintenant ce que sont les tests d’intégration, et surtout quelles parties doivent être testées. Nous allons maintenant les intégrer .

- use [Testing](https://testing-library.com/docs/dom-testing-library/intro/)

```js

```
