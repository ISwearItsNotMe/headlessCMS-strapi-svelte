# ==FRENCH VERSION==

## Framework

Pour ce projet nous utiliserons principalement [Strapi](https://docs.strapi.io/dev-docs/quick-start) pour gérer notre API et nos entités par extension.

## Entités

Notre projet comporte quatres entités distinctes qui sont les utilisateurs, les jeux, les ludothèques et les tags.

### _User_ (utilisateurs)

Les _User_ correspondent à vous, ou n'importe qui d'autre qui tenterait de rejoindre votre application.

Un _User_ est composé de ces éléments :

    id: Number
    username: Text
    email: Email
    password: Password
    confirmed: Boolean
    blocked: Boolean

Les type _Email_ et _Password_ sont uniques à _Strapi_, ceux là permettent de vérifier et de paramétrer plus facilement comment ces champs doivent être traiter en base de données.

### _Game_ (jeux)

Les _Game_ correspondent aux différents jeux que nous pouvons rencontrer

Un _Game_ est composé de ces éléments :

    id: Number
    name: Text
    description: Rich Text
    minPlayers: Number
    maxPlayers: Number
    time: Number
    minYear: Number
    images: Media[]

_Rich Text_ et _Media_ sont aussi uniques à _Strapi_, ils servent respectivement à : gérer de long texte et à gérer des médias (photos, vidéos, etc.)

### _Library_ (ludothèques)

Les _Library_ correspondent aux différents bibliothèque qu'un utilisateur peut créer, elle permette de stocker les différents jeux.

Une _Library_ est composée de ces éléments :

    id: Number
    name: Text

### _Tag_ (ludothèques)

Les _Tag_ correspondent aux différentes "catégories" qu'un jeu peut avoir (famillial, asymétrique, etc.)

Un _Tag_ est composé de ces éléments :

    id: Number
    name: Text

## Relations

Pour faire fonctionner le tout, certaines de nos entités sont en relation avec d'autres.

### _User--Library_

Cette relation _OneToMany_ met en avant le fait qu'un _User_ peut avoir plusieurs _Library_, mais qu'une _Library_ ne peut appartenir qu'à un _User_

### _Game--Library_

Ici nous avons une relation _ManyToMany_ entre un _Game_ et une _Library_, ce qui signifie qu'un _Game_ peut être dans plusieurs _Library_ et qu'une _Library_ peut avoir plusieurs _Game_

### _Game--Tag_

Ici nous avons une relation _ManyToMany_ entre un _Game_ et un _Tag_, ce qui signifie qu'un _Game_ peut avoir plusieurs _Tag_ et qu'un _Tag_ peut appartenir à plusieurs _Game_

# ==ENGLISH VERSION==

## Framework

For this project, we will primarily use Strapi to manage our API and, by extension, our entities.

## Entities

Our project has four distinct entities: users, games, libraries, and tags.

### _User_ (users)

The User represents you, or anyone else who tries to join your application.

A User consists of these elements:

    id: Number
    username: Text
    email: Email
    password: Password
    confirmed: Boolean
    blocked: Boolean

The types Email and Password are unique to Strapi. They allow for easier verification and configuration of how these fields should be treated in the database.

### _Game_ (games)

The Game refers to the different games that we can encounter.

A Game consists of these elements:

    id: Number
    name: Text
    description: Rich Text
    minPlayers: Number
    maxPlayers: Number
    time: Number
    minYear: Number
    images: Media[]

Rich Text and Media are also unique to Strapi. They are used to manage long text and media (photos, videos, etc.), respectively.

### _Library_ (libraries)

The Library refers to the different libraries a user can create to store various games.

A Library consists of these elements:

    id: Number
    name: Text

### _Tag_ (tags)

The Tag refers to the different "categories" a game can have (family, asymmetric, etc.).

A Tag consists of these elements:

    id: Number
    name: Text

## Relations

To make everything work, some of our entities are related to others.

### _User--Library_

This OneToMany relationship highlights the fact that a User can have multiple Libraries, but a Library can only belong to one User.

### _Game--Library_

Here we have a ManyToMany relationship between a Game and a Library, meaning that a Game can be in multiple Libraries, and a Library can have multiple Games.

### _Game--Tag_

Here we have a ManyToMany relationship between a Game and a Tag, meaning that a Game can have multiple Tags, and a Tag can belong to multiple Games.
