# 📑 Rapport de Projet : Application de Vote Électronique Décentralisée (DApp)

## 1. Introduction
Ce projet consiste en la création d'une application décentralisée (DApp) permettant de réaliser des votes électroniques sécurisés et transparents en utilisant la technologie blockchain. Le système garantit l'intégrité des votes, empêche la fraude (un compte = un vote) et assure la transparence totale des résultats.

## 2. Architecture Technique
Le système est composé de trois couches principales :
- **Réseau Blockchain (Local) :** `Ganache` fournit le réseau Ethereum local pour les tests et la gestion des comptes.
- **Smart Contracts :** `Solidity` est utilisé pour écrire la logique métier (candidats, vérification des votes). Le déploiement est géré par `Truffle`.
- **Frontend / Client :** L'interface utilisateur est servie par `Node.js / Express` et interagit avec la blockchain via `Web3.js`. L'authentification est déléguée au portefeuille `MetaMask`.

## 3. Workflow de l'Application (Captures d'écran)

Voici le processus complet documentant l'utilisation et le fonctionnement de la blockchain.

### 3.1. Configuration de la Blockchain et de MetaMask
*(Ajoutez ici les captures d'écran montrant l'ajout du réseau Ganache Local et l'importation de la clé privée dans MetaMask. Exemple de nom à utiliser : `![Configuration MetaMask](images/metamask_setup.png)`)*

### 3.2. Interface de Vote (Avant le vote)
*(Ajoutez ici la capture de l'application affichant les candidats Pokémon et le bouton de connexion. Exemple: `![UI Avant Vote](images/ui_before_vote.png)`)*

### 3.3. Transaction Blockchain (Confirmation MetaMask)
*(Ajoutez ici la capture d'écran de l'extension MetaMask demandant la confirmation de l'utilisateur pour valider son vote et payer les frais de "gas". Exemple : `![MetaMask Transaction](images/metamask_transaction.png)`)*

### 3.4. Résultats du Vote (Après la transaction)
*(Ajoutez ici la capture du tableau de bord mis à jour, reflétant correctement le nouveau décompte des votes sur la blockchain local. Exemple : `![Résultat Final](images/ui_after_vote.png)`)*

## 4. Conclusion
L'utilisation des Smart Contracts via Solidity simplifie drastiquement le mécanisme de confiance d'un vote. En stockant le booléen `hasVoted` sur la blockchain via une table de hashage mapping, la plateforme est mathématiquement protégée contre la fraude de double vote. Ce projet démontre la viabilité d'Ethereum pour les systèmes participatifs sécurisés.
