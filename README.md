# ==FRENCH VERSION==

# DigiGame - Documentation

## Description

DigiGame est un projet qui consiste en un CMS créé avec Strapi pour gérer les données, et SvelteJS pour gérer le visuel principal du site ainsi que la logique utilisateur.

## Pré-requis

Avant de commencer avec ce projet vous devez vous assurer d'avoir sur votre machine :

- [git](https://github.com/) (pour le clonage de ce repo)
- [node](https://nodejs.org) (une version paire, de préférence la v20.9.0)

## Le dossier UTILS

Le dossier utils contient de nombreux fichiers et images utiles au projet

Le modèle de données est consultable dans le fichier STRUCTURE.md
Le diagramme d'utilisation est consultable via l'image CAS_UTILISATION.png
Les users stories sont consultables dans le fichier USERSTORY.md
Le schéma UML est consultable via l'image DatabaseUML.png
Le diagramme de séquence est consultable via l'image USECASE_ManageEntity.png

## Démarrage / Guide d'installation

1. Dans un premier temps vous devez cloner ce repo sur votre machine via : `git clone https://github.com/ISwearItsNotMe/headlessCMS-strapi-svelte.git`
2. Don't forget to copy the .env.example and rename it to .env
3. Maintenant vous devez lancer le back en faisant : `cd /back && npm install && npm run develop`, cela permettra d'accèder au back, d'installer les packages nécessaires, et de lancer le projet back
4. Vous y avez accès via http://localhost:1337 et en se connectant avec les identifiants (admin@admin.fr / Admin12!)
5. Maintenant pour le front vous devez depuis la racine faire : `cd /front && npm install && npm run dev`, cela permettra d'accèder au front, d'installer les packages nécessaires, et de lancer le projet front
6. Et vous pouvez y accéder depuis http://localhost:5173

## Potentielles erreurs

Si l'application ne fonctionne pas, vous devrez peut-être changer les paramètres des rôles pour cela :

1. Sur Strapi, allez dans la section "Settings"
2. Naviguer vers la section "Roles"
3. Cliquer sur "Edit" du role "Public"
4. Ensuite, choisissez l'option "Select All" sur toutes les entités Game/Library/Tag
5. N'oubliez pas de sauvegarder !

# ==ENGLISH VERSION==

# DigiGame - Documentation

## Description

DigiGame is a project that involves a CMS created with Strapi to manage data, and SvelteJS to handle the main visuals of the site as well as user logic.

## Prerequisites

Before starting with this project, ensure you have the following on your machine:

- [git] (for cloning this repository)
- [node] (an even version, preferably v20.9.0)

## The UTILS Folder

The utils folder contains numerous files and images useful for the project:

The data model can be viewed in the STRUCTURE.md file.
The use case diagram can be viewed via the CAS_UTILISATION.png image.
The user stories can be viewed in the USERSTORY.md file.
The UML schema can be viewed via the DatabaseUML.png image.
The sequence diagram can be viewed via the USECASE_ManageEntity.png image.

## Startup / Installation Guide

1. First, you need to clone this repo to your machine using: git clone https://github.com/ISwearItsNotMe/headlessCMS-strapi-svelte.git
2. Don't forget to copy the .env.example and rename it to .env
3. Now, you need to launch the backend by doing: `cd /back && npm install && npm run develop`. This will allow access to the backend, install the necessary packages, and launch the backend project.
4. You can access it via http://localhost:1337 and log in with the credentials (admin@admin.fr / Admin12!).
5. For the front end, you need to, from the root, do: `cd /front && npm install && npm run dev`. This will allow access to the front end, install the necessary packages, and launch the front end project.
6. And you can access it from http://localhost:5173.

## Potential Errors

If the application does not work, you may need to change the role settings for this:

1. On Strapi, go to the "Settings" section.
2. Navigate to the "Roles" section.
3. Click on "Edit" for the "Public" role.
4. Then, choose the "Select All" option for all the Game/Library/Tag entities.
5. Don't forget to save!
