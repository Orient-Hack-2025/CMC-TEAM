# Guide de Démarrage
Ce guide vous aidera à commencer votre projet pour le Hackathon d'Orientation Scolaire.

## Prérequis
Avant de commencer, assurez-vous d'avoir:
1. Un compte GitHub
2. Accepté l'invitation à rejoindre l'organisation du hackathon
3. Git installé sur votre machine locale
4. Les connaissances de base en développement logiciel

## Étape 1: Créer votre Dépôt à partir du Template
1. Accédez à la page du dépôt template dans l'organisation GitHub
2. Cliquez sur le bouton vert "Use this template"
3. Sélectionnez "Create a new repository"
4. Choisissez l'organisation du hackathon comme propriétaire
5. Nommez votre dépôt selon la convention: `hackathon-[nom-de-votre-équipe]`
6. Sélectionnez l'option "Private" pour le dépôt
7. Cliquez sur "Create repository from template"

## Étape 2: Ajouter les Membres de votre Équipe
1. Dans votre nouveau dépôt, allez dans l'onglet "Settings"
2. Cliquez sur "Collaborators and teams" dans le menu latéral
3. Cliquez sur "Add people"
4. Entrez les noms d'utilisateur GitHub ou les adresses email de vos coéquipiers
5. Sélectionnez le niveau d'accès approprié (généralement "Write" pour permettre des modifications)
6. Cliquez sur "Add [nom]" pour chaque membre

## Étape 3: Configurer votre Projet
1. Clonez le dépôt sur votre machine locale:
   ```bash
   git clone https://github.com/Orient-Hack-2025/hackathon-[nom-de-votre-équipe].git
   cd hackathon-[nom-de-votre-équipe]
   ```
2. Mettez à jour le fichier README.md avec les informations spécifiques à votre projet
3. Complétez le fichier SOUMISSION.md avec les détails de votre équipe et de votre projet

## Étape 4: Structure du Projet
Organisez votre code dans les dossiers suivants:
- `/src`: Contient le code source principal de votre application
- `/docs`: Documentation supplémentaire pour votre projet
- `/tests`: Tests pour votre code
- `/assets`: Ressources comme les images, fichiers CSS, etc.

## Étape 5: Développement
Voici quelques bonnes pratiques à suivre:
1. **Travaillez avec des branches**:
   ```bash
   git checkout -b nom-de-fonctionnalité
   # Travaillez sur votre code
   git add .
   git commit -m "Description de vos changements"
   git push origin nom-de-fonctionnalité
   ```
2. **Utilisez les Pull Requests** pour réviser le code en équipe avant de le fusionner dans la branche principale
3. **Mettez à jour régulièrement votre README** avec des instructions d'installation et d'utilisation
4. **Documentez votre code** avec des commentaires clairs

## Étape 6: Préparation de la Soumission
Avant la date limite, assurez-vous de:
1. Finaliser votre code et le pousser vers votre dépôt
2. Compléter entièrement le fichier SOUMISSION.md
3. Préparer votre démo (si applicable)
4. Ajouter tous les matériels de support (présentations, vidéos, etc.)

## Ressources Utiles
- [Guide de Markdown](https://guides.github.com/features/mastering-markdown/)
- [Bonnes pratiques Git](https://github.com/trein/dev-best-practices/wiki/Git-Commit-Best-Practices)
- [Documentation GitHub](https://docs.github.com/fr)

## Support
Si vous avez des questions ou rencontrez des problèmes:
1. Consultez la documentation fournie
2. Ouvrez une issue dans le dépôt principal du hackathon
3. Contactez les organisateurs à [anastnx@gmail.com]

Bonne chance et bon codage!