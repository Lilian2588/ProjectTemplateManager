# Project Template Manager : Vision et Architecture Technique

## 1. Vision Globale du Projet

Le projet consiste à développer une application web ambitieuse de type **Project Template Manager**. L'objectif principal est de fournir une interface fluide et intuitive permettant aux utilisateurs de créer et configurer des projets informatiques "from scratch". 

**Fonctionnalités clés du socle commun :**
*   **Guidage utilisateur :** Accompagner l'utilisateur dans le choix des technologies adaptées à son besoin.
*   **Personnalisation de templates :** Offrir des modèles de départ variés (ex: UX/UI, logique métier, Deep Learning / Machine Learning, développement web pur, ou projets spécifiques comme un jeu d'échecs).
*   **Génération sur-mesure :** Produire une arborescence et une base de code prêtes à l'emploi.

**Évolutivité (Les Couches IA) :**
Le socle commun est pensé pour accueillir très facilement des fonctionnalités d'Intelligence Artificielle de pointe, conçues comme des modules complémentaires :
*   *L'équipe d'agents autonomes* (pour de la recherche, de la veille ou de la génération complexe).
*   *Le compagnon vocal* (assistant interactif en temps réel).

---

## 2. La Stack Technique (Architecture Microservices)

Pour soutenir cette ambition, l'architecture est divisée en trois pôles majeurs afin de garantir fluidité, robustesse et intégration de l'IA :

### Front-End (L'Interface Utilisateur)
*   **Technologies :** React + TypeScript.
*   **Rôle :** Offrir une expérience utilisateur (UX) dynamique et réactive. TypeScript apporte la sécurité du typage pour gérer les configurations complexes des templates.
*   **Outils recommandés :** Vite (pour le bundling rapide), Tailwind CSS (pour l'UI).

### Back-End Principal (Le Chef d'Orchestre)
*   **Technologies :** C# avec ASP.NET Core.
*   **Base de données :** PostgreSQL (pour stocker l'historique, les utilisateurs et les métadonnées des projets).
*   **Rôle :** C'est le cœur de l'application web. Il gère la sécurité, les requêtes HTTP du Front-End, la logique métier classique et l'assemblage de base des projets.

### Back-End IA (L'Usine à Intelligence)
*   **Technologies :** Python (via un framework comme FastAPI).
*   **Rôle :** Isoler tous les traitements lourds. C'est ici que tourneront les modèles de Machine Learning/Deep Learning, les workflows d'agents (CrewAI, LangGraph) et potentiellement la génération de code dynamique.

### Infrastructure et Communication Asynchrone
Pour que le C# n'attende pas passivement que le Python ait fini de générer des éléments complexes (ce qui bloquerait l'application) :
*   **Message Broker :** RabbitMQ ou ActiveMQ. (Le C# poste une demande de travail, le Python la récupère, la traite, et signale quand c'est terminé).
*   **Temps réel :** Utilisation de WebSockets (via SignalR en .NET) pour avertir le Front-End React que le backend a terminé de préparer le projet.